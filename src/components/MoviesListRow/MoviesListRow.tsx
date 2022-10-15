import "./MoviesListRow.css";
import React from "react";
import { MovieResultsFragment } from "../../graphql/generated-types";
import { MovieScoreBar } from "../MovieScoreBar/MovieScoreBar";
import { PosterPlaceHolder } from "../PosterPlaceHolder/PosterPlaceHolder";

interface MoviesListRowProps {
  data: MovieResultsFragment;
}

export const MoviesListRow: React.FC<MoviesListRowProps> = ({ data }) => {
  return (
    <div className="searchMoviesResultRow">
      <div className="searchMoviesResultRow-poster">
        {data.poster?.medium ? (
          <img
            src={data.poster?.medium}
            className="searchMoviesResultRow-poster-img"
          ></img>
        ) : (
          <PosterPlaceHolder name={data.name}></PosterPlaceHolder>
        )}
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
