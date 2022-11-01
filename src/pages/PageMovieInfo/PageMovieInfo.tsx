import { useEffect, useRef, useState } from "react";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import {
  Cast,
  GetMovieQuery,
  MovieDataFragment,
  useGetMovieQuery,
  useGetRelatedMoviesQuery,
} from "../../graphql/generated-types";
import "./PageMovieInfo.css";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useParams } from "react-router-dom";
import { useBottomReached } from "../../hooks/useBottomReached";
import ExtendingLineAnimation from "../../components/ExtendingLineAnimation/ExtendingLineAnimation";
import MovieInfoHeader from "../../components/MovieInfoHeader/MovieInfoHeader";
import getWikiImdb from "./getWikiImdb";
import { useWikiGetExtract } from "../../REST/wikipedia/hooks/useWikiGetExtract";

export const PageMovieInfo: React.FC = () => {
  const { movieId } = useParams();

  const fetchMoreDelay = 2000;

  const relatedFetchedAll = useRef<boolean | null>(false);
  const [imdbUrl, setImdbUrl] = useState<string>("");
  const [wikiPageId, setWikiPageId] = useState<number | undefined>(undefined);
  const [fetchedExternalIds, setfetchedExternalIds] = useState<boolean>(false);

  // setting fetchedAll to false if movie ID changes
  useEffect(() => {
    relatedFetchedAll.current = false;
    setfetchedExternalIds(false);
    setWikiPageId(undefined);
    setImdbUrl("");
  }, [movieId]);

  const getExternalInfo = (data: GetMovieQuery) => {
    const releaseDate = new Date(Date.parse(data?.movie.releaseDate));
    getWikiImdb(
      data.movie.name,
      releaseDate.getFullYear(),
      (wikiPageId, imdbUrl) => {
        setfetchedExternalIds(true);
        setImdbUrl(imdbUrl);
        setWikiPageId(wikiPageId);
      },
      () => {
        setfetchedExternalIds(true);
      }
    );
  };

  const { loading: loadingWikiExtract, data: dataWikiExtract } =
    useWikiGetExtract(wikiPageId as number, {
      onlyIntro: true,
      plainText: true,
      sentenceLimit: 8,
    });

  const { loading, data } = useGetMovieQuery({
    variables: { id: movieId! },
    onCompleted: getExternalInfo,
  });

  const {
    fetchMore: relatedFetchmore,
    loading: relatedLoading,
    data: relatedData,
    error: relatedError,
  } = useGetRelatedMoviesQuery({
    notifyOnNetworkStatusChange: true,
    variables: { id: movieId!, limit: 3 },
  });

  const isOnBottom = useBottomReached(
    document.getElementById("mainBody-parentScroll")!,
    () => {
      if (!relatedFetchedAll.current) {
        relatedFetchedAll.current = true;
        relatedFetchmore({ variables: { limit: undefined, page: undefined } });
      }
    },
    fetchMoreDelay
  );

  const relatedMovies = () => {
    return (
      <>
        {relatedData &&
          !relatedError &&
          relatedData.movie?.recommended?.length > 0 && (
            <>
              <div className="pageHeadText">Similar to {data?.movie.name}</div>
              <MoviesList
                list={relatedData.movie.recommended}
                key={movieId}
              ></MoviesList>
            </>
          )}
        <div className="movieInfo-footerLoadingContainer">
          {!relatedFetchedAll.current && !relatedLoading && isOnBottom && (
            <ExtendingLineAnimation
              animationTime={fetchMoreDelay}
              color={"#FFFFFF"}
              height={"2px"}
            />
          )}
          {relatedLoading && <LoadingAnimation />}
        </div>
      </>
    );
  };

  const wikiInfo = () => {
    if (
      !fetchedExternalIds ||
      loadingWikiExtract ||
      (fetchedExternalIds &&
        wikiPageId &&
        dataWikiExtract?.query?.pages![0].pageid !== wikiPageId)
    ) {
      return <LoadingAnimation />;
    } else {
      if (
        dataWikiExtract?.query?.pages![0].extract &&
        dataWikiExtract?.query?.pages![0].pageid === wikiPageId
      )
        return (
          <>
            <div className="movieInfo-wiki-title">From Wikipedia:</div>
            <div className="movieInfo-wiki-text">
              {dataWikiExtract?.query?.pages![0].extract}
            </div>
          </>
        );
    }
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="pageMovieInfo page" key={movieId}>
          <div className="movieInfo componentCard">
            <MovieInfoHeader
              movie={data?.movie as MovieDataFragment}
              wikiPageId={wikiPageId ? wikiPageId : 0}
              imdbUrl={imdbUrl}
            ></MovieInfoHeader>
            <div className="movieInfo-body">
              <div className="movieInfo-body-cast">
                {data?.movie?.cast && data?.movie?.cast.length > 0 && (
                  <p>
                    <b>Cast:</b>
                  </p>
                )}
                <table>
                  <tbody>
                    {data?.movie.cast.map((c, index) => {
                      return (
                        <tr key={c.id}>
                          <td>{`${c.person?.name}:`}</td>
                          <td>{(c.role as Cast).character}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {wikiInfo()}
            </div>
          </div>
          {relatedMovies()}
        </div>
      )}
    </>
  );
};
