import "./MoviesListRow.css";
import React from "react";
import { MovieResultsFragment } from "../../graphql/generated-types";
import { MovieScoreBar } from "../MovieScoreBar/MovieScoreBar";
import { MoviePoster } from "../MoviePoster/MoviePoster";

interface MoviesListRowProps {
  data: MovieResultsFragment;
}

export const MoviesListRow: React.FC<MoviesListRowProps> = ({ data }) => {
  return (
    <div className="searchMoviesResultRow">
      <div className="searchMoviesResultRow-poster">
        <MoviePoster imgUrl={data.poster?.medium} name={data.name} />
      </div>
      <div className="searchMoviesResultRow-data">
        <h2>{data.name}</h2>
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
