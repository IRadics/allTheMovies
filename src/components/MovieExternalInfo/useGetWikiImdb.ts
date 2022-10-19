import { useWikiGetExtLinks } from "../../REST/wikipedia/useWikiGetExtLinks";
import { useWikiSearch } from "../../REST/wikipedia/useWikiSearch";
import { useState, useEffect } from "react";
import { stringSimilarity } from "string-similarity-js";

type WikiPageCandidate = {
  pageId: number;
  title: string;
  imdbLink?: string;
  releaseDateFound?: boolean;
  probability?: number;
};

export const useGetWikiImdb = (searchTerm: string, releaseYear: number) => {
  const [candidates, setCandidates] = useState<WikiPageCandidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [wikiPageId, setWikiPageId] = useState<number>();
  const [imdbLink, setImdbLink] = useState<string>("");

  const wikiSearch = useWikiSearch(searchTerm, 30);
  const extLinksQuery = useWikiGetExtLinks(candidates.map((c) => c.pageId));

  const findReleaseYear = (pageId: number) => {
    if (!releaseYear) return false;
    return wikiSearch.data?.query.search
      .find((s) => s.pageid === pageId)
      ?.snippet.includes(releaseYear.toString());
  };

  useEffect(() => {
    if (!wikiSearch?.loading && wikiSearch?.data) {
      let pageInfo = wikiSearch!.data?.query.search.map((id) => {
        return { pageId: id.pageid, title: id.title };
      });
      setCandidates(candidates.concat(pageInfo));
    }
    // eslint-disable-next-line
  }, [wikiSearch?.loading]);

  useEffect(() => {
    if (!extLinksQuery.loading && extLinksQuery.data) {
      candidates.forEach((cand) => {
        cand.imdbLink = extLinksQuery.data?.query.pages
          .find((p) => p.pageid === cand.pageId)
          ?.extlinks?.map((l) => l.url)
          .find((e) => e.includes("imdb.com/title/"));
        cand.releaseDateFound = findReleaseYear(cand.pageId);
        cand.probability =
          ((cand.imdbLink ? 1 : 0) +
            (cand.releaseDateFound ? 1 : 0) +
            Math.max(
              stringSimilarity(cand.title, searchTerm),
              stringSimilarity(cand.title + " (film)", searchTerm),
              stringSimilarity(cand.title + " (movie)", searchTerm),
              stringSimilarity(cand.title + ` ${releaseYear}`, searchTerm)
            ) *
              1.5) /
          3.5;
      });

      candidates
        .sort((x, b) => {
          return x.probability! - b.probability!;
        })
        .reverse();
      if (candidates[0].probability! > 0.65) {
        if (candidates[0].imdbLink) setImdbLink(candidates[0].imdbLink);

        setWikiPageId(candidates[0].pageId);
      } else {
        setImdbLink("");
        setWikiPageId(undefined);
      }
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [extLinksQuery.loading]);

  return { loading, wikiPageId, imdbLink };
};
