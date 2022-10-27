import { useEffect, useRef, useState } from "react";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { MovieExternalInfo } from "../../components/MovieExternalInfo/MovieExternalInfo";
import { MoviePoster } from "../../components/MoviePoster/MoviePoster";
import { MovieScoreBar } from "../../components/MovieScoreBar/MovieScoreBar";
import {
  Cast,
  useGetMovieQuery,
  useGetRelatedMoviesQuery,
} from "../../graphql/generated-types";
import "./PageMovieInfo.css";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { ButtonGroup, Button } from "@mui/material";
import { useNavigateIfNew } from "../../hooks/useNavigateIfNew";
import { useParams } from "react-router-dom";
import { useBottomReached } from "../../hooks/useBottomReached";
import ExtendingLineAnimation from "../../components/ExtendingLineAnimation/ExtendingLineAnimation";
import { QueryResult } from "@apollo/client";

export const PageMovieInfo: React.FC = () => {
  const { movieId } = useParams();
  const navigate = useNavigateIfNew();

  const fetchMoreDelay = 2000;

  const relatedFetchedAll = useRef<boolean | null>(false);
  const [imdbLink, setImdbLink] = useState<string>("");
  const [wikiLink, setwikiLink] = useState<string>("");

  const { loading, data } = useGetMovieQuery({
    variables: { id: movieId! },
  });

  const releaseDate = new Date(Date.parse(data?.movie.releaseDate));
  const releaseDateMonthStr = releaseDate.getMonth()
    ? releaseDate.getMonth().toString.length < 1
      ? `/${"0" + releaseDate.getMonth()}`
      : `/${releaseDate.getMonth()}`
    : "";
  const releaseDateStr = `${
    releaseDate.getFullYear() ? releaseDate.getFullYear() : ""
  }${releaseDateMonthStr}`;

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

  // setting fetchedAll to false if  movie ID changes
  useEffect(() => {
    relatedFetchedAll.current = false;
  }, [movieId]);

  const relatedMovies = () => {
    return (
      <>
        {relatedData &&
          !relatedError &&
          relatedData.movie?.recommended?.length > 0 && (
            <>
              <div className="pageHeadText">Similar to {data?.movie.name}</div>
              <MoviesList list={relatedData.movie.recommended}></MoviesList>
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

  const buttons = () => {
    return (
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          disabled={imdbLink === ""}
          onClick={() => {
            window.open(imdbLink, "_blank");
          }}
        >
          IMDB
        </Button>
        <Button
          disabled={wikiLink === ""}
          onClick={() => {
            window.open(wikiLink, "_blank");
          }}
        >
          Wikipedia
        </Button>
        <Button
          onClick={() => {
            navigate(`/related/${movieId}`);
          }}
        >
          Related
        </Button>
      </ButtonGroup>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="pageMovieInfo page">
          <div className="movieInfo componentCard">
            <div className="movieInfo-header" style={{}}>
              <img
                src={data?.movie.backdrop?.large}
                className="movieInfo-backdrop"
                alt=""
              ></img>
              <MoviePoster
                imgUrl={data?.movie.poster?.large}
                name={data?.movie.name!}
              />

              <div className="movieInfo-data">
                <div className="vscrollable">
                  <div className="movieInfo-data-title">
                    <div className="movieInfo-data-title-main rtitle1">
                      {data?.movie.name}
                    </div>
                    {(releaseDateStr || data?.movie?.genres?.length! > 0) && (
                      <div className="movieInfo-data-title-info rtitle2">
                        {releaseDateStr}{" "}
                        {data?.movie.genres.map((genre) => {
                          return `| ${genre.name} `;
                        })}
                      </div>
                    )}
                    {data?.movie.tagline && (
                      <div className="movieInfo-data-title-tagline">
                        {data?.movie.tagline}
                      </div>
                    )}
                  </div>
                  <div className="movieInfo-data-overview">
                    <span>{data?.movie.overview}</span>
                  </div>
                </div>
                <div className="movieInfo-data-footer">
                  <MovieScoreBar
                    percentage={data?.movie.score!}
                  ></MovieScoreBar>
                  {buttons()}
                </div>
              </div>
            </div>
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
                        <tr key={index}>
                          <td>{`${c.person?.name}:`}</td>
                          <td>{(c.role as Cast).character}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <MovieExternalInfo
                searchTerm={data?.movie.name!}
                releaseYear={releaseDate.getFullYear()}
                onFetchSuccess={(imdbLink, wikiLink) => {
                  setImdbLink(imdbLink);
                  setwikiLink(wikiLink);
                }}
              ></MovieExternalInfo>
            </div>
          </div>
          {relatedMovies()}
        </div>
      )}
    </>
  );
};
