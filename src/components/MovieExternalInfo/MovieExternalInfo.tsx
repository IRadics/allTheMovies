import { useWikiGetExtract } from "../../REST/wikipedia/useWikiGetExtract";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";
import "./MovieExternalInfo.css";
import { useGetWikiImdb } from "./useGetWikiImdb";

export const MovieExternalInfo: React.FC<{
  searchTerm: string;
  releaseYear: number;
  onFetchSuccess?: (imdbLink: string, wikiLink: string) => void;
}> = ({ searchTerm, releaseYear, onFetchSuccess }) => {
  const {
    loading: loadingWikiImdb,
    wikiPageId,
    imdbLink,
  } = useGetWikiImdb(searchTerm, releaseYear);

  const wikiLink = `https://en.wikipedia.org/?curid=${wikiPageId}`;

  const { loading: loadingWikiExtract, data } = useWikiGetExtract(
    wikiPageId as number,
    {
      onlyIntro: true,
      plainText: true,
      sentenceLimit: 8,
    }
  );
  const wikiExtract = data?.query.pages[0].extract;

  if (onFetchSuccess && !loadingWikiImdb && !loadingWikiExtract) {
    onFetchSuccess(imdbLink, wikiLink);
  }

  return (
    <div className="movieExternalInfo">
      <div className="movieExternalInfo-wiki">
        {!loadingWikiExtract && (
          <>
            <div className="movieExternalInfo-wiki-title">From Wikipedia:</div>
            <div className="movieExternalInfo-wiki-extract"> {wikiExtract}</div>
            <div className="movieExternalInfo-wikiLink">
              <ExternalLink
                href={wikiLink}
                text="See more on Wikipedia"
                target="_blank"
              ></ExternalLink>
            </div>
          </>
        )}
      </div>
      {((loadingWikiExtract && wikiPageId) || loadingWikiImdb) && (
        <LoadingAnimation />
      )}
    </div>
  );
};
