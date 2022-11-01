import stringSimilarity from "string-similarity-js";
import wikiGetExtLinks from "../../REST/wikipedia/queries/wikiGetExtLinks";
import wikiSearch from "../../REST/wikipedia/queries/wikiSearch";
import {
  WikipediaGetExtLinksResults,
  WikipediaSearchResults,
} from "../../REST/wikipedia/types/wikipedia.types";

type WikiPageCandidate = {
  pageId: number;
  title: string;
  imdbLink?: string;
  releaseDateFound?: boolean;
  probability?: number;
};

export default function getWikiImdb(
  searchTerm: string,
  releaseYear: number,
  onSuccess: (wikiPageId: number, imdbUrl: string) => void,
  onError?: () => void
) {
  let candidates: WikiPageCandidate[] = [];
  let pageIdsToSearch: number[] = [];

  const handleWikiSearchResults = (results: WikipediaSearchResults) => {
    let pageinfo = results.query?.search.map((id) => {
      return { pageId: id.pageid, title: id.title };
    });
    if (pageinfo) {
      candidates = candidates.concat(pageinfo);
    } else {
      if (onError) onError();
      return;
    }
    pageIdsToSearch = candidates.map((c) => c.pageId);
    candidates.forEach((c) => {
      if (releaseYear) {
        c.releaseDateFound =
          results.query?.search
            .find((s) => s.pageid === c.pageId)
            ?.snippet.includes(releaseYear.toString()) !== undefined;
      }
    });

    wikiGetExtLinks(
      {
        prop: ["extlinks"],
        origin: "*",
        format: "json",
        action: "query",
        formatversion: "latest",
        pageids: pageIdsToSearch,
      },
      handleWikiGetExtLinks,
      (e) => {
        console.log(e);
        if (onError) onError();
      }
    );
  };

  const handleWikiGetExtLinks = (results: WikipediaGetExtLinksResults) => {
    candidates.forEach((cand) => {
      cand.imdbLink = results.query?.pages
        .find((p) => p.pageid === cand.pageId)
        ?.extlinks?.map((l) => l.url)
        .find((e) => e.includes("imdb.com/title/"));

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

    let imdbUrl = "";
    let wikiPageId = 0;
    candidates
      .sort((x, b) => {
        return x.probability! - b.probability!;
      })
      .reverse();
    if (candidates[0].probability! > 0.65) {
      if (candidates[0].imdbLink) {
        imdbUrl = candidates[0].imdbLink;
      }
      wikiPageId = candidates[0].pageId;
    }

    onSuccess(wikiPageId, imdbUrl);
  };

  wikiSearch(
    {
      origin: "*",
      srlimit: 30,
      srsearch: searchTerm,
      format: "json",
      action: "query",
      formatversion: "latest",
      list: ["search"],
    },
    handleWikiSearchResults,
    (e) => {
      console.log(e);
      if (onError) onError();
    }
  );
}
