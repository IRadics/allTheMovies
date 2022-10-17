import "./MoviesListRow.css";
import React from "react";
import { MovieResultsFragment } from "../../graphql/generated-types";
import { MovieScoreBar } from "../MovieScoreBar/MovieScoreBar";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { useNavigate } from "react-router-dom";

interface MoviesListRowProps {
  data: MovieResultsFragment;
}

export const MoviesListRow: React.FC<MoviesListRowProps> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="searchMoviesResultRow componentCard">
      <div className="searchMoviesResultRow-poster">
        <MoviePoster imgUrl={data.poster?.medium} name={data.name} />
      </div>
      <div className="searchMoviesResultRow-data">
        <span>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate(`/movie/${data.id}`);
            }}
          >
            <h2>{data.name}</h2>
          </a>
        </span>
        <span className="searchMoviesResultRow-data-overview">
          {data.overview}
        </span>
        <div className="searchMoviesResultRow-footer">
          <div className="searchMoviesResultRow-data-genres">
            {data.genres &&
              data.genres.map((genre) => {
                return `${genre.name}, `;
              })}
          </div>
          <div className="searchMoviesResultRow-score">
            <MovieScoreBar percentage={data.score}></MovieScoreBar>
          </div>
        </div>
      </div>
    </div>
  );
};
