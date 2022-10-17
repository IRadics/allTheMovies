import { useWikiGetExtract } from "../../REST/wikipedia/useWikiGetExtract";
import { ExternalLink } from "../ExternalLink/ExternalLink";
import { LoadingAnimation } from "../LoadingAnimation/LoadingAnimation";
import "./MovieExternalInfo.css";
import { useGetWikiImdb } from "./useGetWikiImdb";

interface MovieExternalInfoProps {
  searchTerm: string;
  releaseYear: number;
}
export const MovieExternalInfo: React.FC<MovieExternalInfoProps> = ({
  searchTerm,
  releaseYear,
}) => {
  const {
    loading: loadingWikiImdb,
    wikiPageId,
    imdbLink,
  } = useGetWikiImdb(searchTerm, releaseYear);

  const { loading: loadingWikiExtract, data } = useWikiGetExtract(
    wikiPageId as number,
    {
      onlyIntro: true,
      plainText: true,
    }
  );
  const wikiExtract = data?.query.pages[0].extract;

  return (
    <div className="movieExternalInfo">
      {imdbLink && (
        <div className="movieExternalInfo-imdbLink">
          <ExternalLink
            href={imdbLink}
            text="IMDB page"
            target="_blank"
          ></ExternalLink>
        </div>
      )}
      <div className="movieExternalInfo-wiki">
        {!loadingWikiExtract && (
          <>
            <div className="movieExternalInfo-wiki-title">From Wikipedia:</div>
            <div className="movieExternalInfo-wiki-extract"> {wikiExtract}</div>
            <div className="movieExternalInfo-wikiLink">
              <ExternalLink
                href={`https://en.wikipedia.org/?curid=${wikiPageId}`}
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
