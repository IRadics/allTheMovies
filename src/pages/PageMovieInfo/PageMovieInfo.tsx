import { useEffect, useRef, useState } from "react";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import {
  GetMovieQuery,
  MovieFragment,
  MovieMinFragment,
  useGetMovieQuery,
  useGetRecommendedMoviesQuery,
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
  const relatedNextCursor = useRef<string | null | undefined>();

  const fetchMoreDelay = 1500;

  const [imdbUrl, setImdbUrl] = useState<string>("");
  const [wikiPageId, setWikiPageId] = useState<number | undefined>(undefined);
  const [fetchedExternalIds, setfetchedExternalIds] = useState<boolean>(false);

  // reset if movieId changes
  useEffect(() => {
    setfetchedExternalIds(false);
    setWikiPageId(undefined);
    setImdbUrl("");
  }, [movieId]);

  const getExternalInfo = (data: GetMovieQuery) => {
    const releaseDate = new Date(Date.parse(data.movies.movie.releaseDate));
    getWikiImdb(
      data.movies.movie.title,
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

  const { loading, data, error } = useGetMovieQuery({
    variables: { id: movieId! },
    onCompleted: getExternalInfo,
  });
  const movie = data?.movies.movie;

  const {
    fetchMore: relatedFetchmore,
    loading: relatedLoading,
    data: relatedData,
    error: relatedError,
  } = useGetRecommendedMoviesQuery({
    notifyOnNetworkStatusChange: true,
    variables: { id: movieId!, first: 5 },
    errorPolicy: "all",
    onCompleted: (d) => {
      relatedNextCursor.current =
        d.movies.movie.recommendations.pageInfo.endCursor;
    },
  });
  const relatedMoviesList =
    relatedData?.movies?.movie?.recommendations?.edges?.map((e) => e?.node);

  const relatedHasNext =
    relatedData?.movies.movie.recommendations.pageInfo.hasNextPage;

  const isOnBottom = useBottomReached(
    document.getElementById("mainBody-parentScroll")!,
    () => {
      relatedFetchmore({
        variables: {
          /*           id: movieId!, */
          after: relatedNextCursor.current,
        },
      });
    },
    fetchMoreDelay,
    relatedHasNext
  );

  const relatedMovies = () => {
    return (
      <>
        {relatedData &&
          !relatedError &&
          relatedMoviesList &&
          relatedMoviesList.length > 0 && (
            <>
              <div className="pageHeadText">Similar to {movie?.title}</div>
              <MoviesList
                list={relatedMoviesList as MovieMinFragment[]}
                key={movieId}
              ></MoviesList>
            </>
          )}
        <div className="movieInfo-footerLoadingContainer">
          {relatedHasNext && !relatedLoading && isOnBottom && (
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
      ) : error ? (
        <h1>this page does not exist</h1>
      ) : (
        <div className="pageMovieInfo page" key={movieId}>
          <div className="movieInfo componentCard">
            <MovieInfoHeader
              movie={movie as MovieFragment}
              wikiPageId={wikiPageId ? wikiPageId : 0}
              imdbUrl={imdbUrl}
            ></MovieInfoHeader>
            <div className="movieInfo-body">
              <div className="movieInfo-body-cast">
                {movie?.credits.cast && movie?.credits.cast.length > 0 && (
                  <p>
                    <b>Cast:</b>
                  </p>
                )}
                <table>
                  <tbody>
                    {movie?.credits.cast.slice(0, 5).map((c, index) => {
                      return (
                        <tr key={c.id}>
                          <td>{`${c.value.name}:`}</td>
                          <td>{c.character}</td>
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
