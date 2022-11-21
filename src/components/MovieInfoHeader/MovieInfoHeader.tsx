import Button from "@mui/material/Button/Button";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import BCN from "../../functions/buildCssClassName";
import { MovieFragment } from "../../graphql/generated-types";
import { useNavigateIfNew } from "../../hooks/useNavigateIfNew";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { MovieScoreBar } from "../MovieScoreBar/MovieScoreBar";
import "./MovieInfoHeader.css";

const MovieInfoHeader: React.FC<{
  movie: MovieFragment;
  wikiPageId: number;
  className?: string;
}> = ({ movie, wikiPageId, className = "" }) => {
  const navigate = useNavigateIfNew();

  const releaseDate = new Date(Date.parse(movie.releaseDate));
  const releaseDateMonthStr = releaseDate.getMonth()
    ? releaseDate.getMonth().toString.length < 1
      ? `/${"0" + releaseDate.getMonth()}`
      : `/${releaseDate.getMonth()}`
    : "";
  const releaseDateStr = `${
    releaseDate.getFullYear() ? releaseDate.getFullYear() : ""
  }${releaseDateMonthStr}`;

  const buttons = () => {
    return (
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          disabled={!movie.imdbID}
          onClick={() => {
            window.open("https://imdb.com/title/" + movie.imdbID, "_blank");
          }}
        >
          IMDB
        </Button>
        <Button
          disabled={!wikiPageId}
          onClick={() => {
            window.open(
              `https://en.wikipedia.org/?curid=${wikiPageId}`,
              "_blank"
            );
          }}
        >
          Wikipedia
        </Button>
        <Button
          onClick={() => {
            navigate(`/related/${movie.id}`);
          }}
        >
          Related
        </Button>
      </ButtonGroup>
    );
  };

  return (
    <div className={BCN("", "movieInfoHeader", className)}>
      <img
        src={movie.backdropLarge}
        className={BCN("-backdrop", "movieInfoHeader", className)}
        alt=""
      ></img>
      <MoviePoster imgUrl={movie.posterLarge} name={movie.title!} />

      <div className={BCN("-data", "movieInfoHeader", className)}>
        <div className={BCN("-data-title", "movieInfoHeader", className)}>
          <div
            className={
              BCN("-data-title-main", "movieInfoHeader", className) + " rtitle1"
            }
          >
            {movie.title}
          </div>
          {(releaseDateStr || movie?.genres?.length! > 0) && (
            <div
              className={
                BCN("-data-title-info", "movieInfoHeader", className) +
                " rtitle1"
              }
            >
              {releaseDateStr}{" "}
              {movie.genres.map((genre) => {
                return `| ${genre.name} `;
              })}
            </div>
          )}
          {movie.tagline && (
            <div
              className={BCN(
                "-data-title-tagline",
                "movieInfoHeader",
                className
              )}
            >
              {movie.tagline}
            </div>
          )}
        </div>
        <div
          className={
            BCN("-data-overview", "movieInfoHeader", className) + " vscrollable"
          }
        >
          <span>{movie.overview}</span>
        </div>

        <div className={BCN("-data-footer", "movieInfoHeader", className)}>
          <MovieScoreBar percentage={movie.rating!}></MovieScoreBar>
          {buttons()}
        </div>
      </div>
    </div>
  );
};

export default MovieInfoHeader;
