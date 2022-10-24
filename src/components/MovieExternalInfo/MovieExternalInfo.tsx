import { useWikiGetExtract } from "../../REST/wikipedia/hooks/useWikiGetExtract";
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
    error: errorWikiImdb,
    wikiPageId,
    imdbLink,
  } = useGetWikiImdb(searchTerm, releaseYear);

  const wikiLink = wikiPageId
    ? `https://en.wikipedia.org/?curid=${wikiPageId}`
    : "";

  const {
    loading: loadingWikiExtract,
    data: dataWikiExtract,
    error: errorWikiExtract,
  } = useWikiGetExtract(wikiPageId as number, {
    onlyIntro: true,
    plainText: true,
    sentenceLimit: 8,
  });

  const isLoading = loadingWikiExtract || loadingWikiImdb;

  const isError = errorWikiExtract || errorWikiImdb;

  const wikiExtract = errorWikiExtract
    ? "Error fetching data from Wikipedia"
    : dataWikiExtract?.query?.pages![0].extract;

  if (onFetchSuccess && !loadingWikiImdb && !loadingWikiExtract) {
    onFetchSuccess(imdbLink, wikiLink);
  }

  return (
    <div className="movieExternalInfo">
      <div className="movieExternalInfo-wiki">
        {!loadingWikiExtract && wikiExtract && (
          <>
            <div className="movieExternalInfo-wiki-title">From Wikipedia:</div>
            <div className="movieExternalInfo-wiki-extract"> {wikiExtract}</div>
            {wikiLink && (
              <div className="movieExternalInfo-wikiLink">
                <ExternalLink
                  href={wikiLink}
                  text="See more on Wikipedia"
                  target="_blank"
                ></ExternalLink>
              </div>
            )}
          </>
        )}
      </div>
      {isLoading && !isError && <LoadingAnimation />}
    </div>
  );
};
