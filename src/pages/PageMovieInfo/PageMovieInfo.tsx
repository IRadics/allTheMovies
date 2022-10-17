import { useNavigate, useParams } from "react-router-dom";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { MovieExternalInfo } from "../../components/MovieWikiInfo/MovieExternalInfo";
import { MoviePoster } from "../../components/MoviePoster/MoviePoster";
import { MovieScoreBar } from "../../components/MovieScoreBar/MovieScoreBar";
import {
  Cast,
  useGetMovieQuery,
  useGetRelatedMoviesQuery,
} from "../../graphql/generated-types";
import "./PageMovieInfo.css";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export const PageMovieInfo: React.FC = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

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
    loading: relatedLoading,
    data: relatedData,
    error: relatedError,
  } = useGetRelatedMoviesQuery({ variables: { id: movieId!, limit: 3 } });

  const relatedMovies = () => {
    if (relatedLoading) {
      return <LoadingAnimation />;
    } else {
      if (
        relatedData &&
        !relatedError &&
        relatedData.movie.recommended.length > 0
      ) {
        return (
          <div>
            <div className="pageHeadText">Similar to {data?.movie.name}</div>
            <MoviesList list={relatedData.movie.recommended}></MoviesList>
            <div className="pageHeadText">
              <a onClick={() => navigate(`/related/${movieId}`)}>See more</a>
            </div>
          </div>
        );
      }
    }
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
                <div className="movieInfo-data-title">{data?.movie.name}</div>
                <div className="movieInfo-data-title-info">
                  {releaseDateStr} |
                  {data?.movie.genres.map((genre) => {
                    return ` ${genre.name} |`;
                  })}
                </div>
                <div className="movieInfo-data-title-tagline">
                  {data?.movie.tagline}
                </div>
                <div className="movieInfo-data-overview">
                  <span>{data?.movie.overview}</span>
                </div>
                <div className="movieInfo-data-"></div>
                <MovieScoreBar percentage={data?.movie.score!}></MovieScoreBar>
              </div>
            </div>
            <div className="movieInfo-body">
              <div className="movieInfo-body-cast">
                {data?.movie.cast && (
                  <p>
                    <b>Cast:</b>
                  </p>
                )}
                <table>
                  {data?.movie.cast.map((c, index) => {
                    return (
                      <tr key={index}>
                        <td>{`${c.person?.name}:\t`}</td>
                        <td>{`|\t`}</td>
                        <td>{(c.role as Cast).character}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
              {
                <MovieExternalInfo
                  searchTerm={data?.movie.name!}
                  releaseYear={releaseDate.getFullYear()}
                ></MovieExternalInfo>
              }
            </div>
          </div>
          {relatedMovies()}
        </div>
      )}
    </>
  );
};
