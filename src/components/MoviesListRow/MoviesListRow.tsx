import "./MoviesListRow.css";
import React from "react";
import { MovieResultsFragment } from "../../graphql/generated-types";
import { MovieScoreBar } from "../MovieScoreBar/MovieScoreBar";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { useNavigate } from "react-router-dom";

export const MoviesListRow: React.FC<{ data: MovieResultsFragment }> = ({
  data,
}) => {
  const navigate = useNavigate();
  return (
    <div className="searchMoviesResultRow componentCard">
      <div className="searchMoviesResultRow-poster">
        <MoviePoster imgUrl={data.poster?.medium} name={data.name} />
      </div>
      <div className="searchMoviesResultRow-data">
        <h2
          className="searchMoviesResultRow-data-title clickableText rtitle2"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/movie/${data.id}`);
          }}
        >
          {data.name}
        </h2>
        <span className="searchMoviesResultRow-data-overview">
          {data.overview}
        </span>
        <div className="searchMoviesResultRow-footer">
          <div className="searchMoviesResultRow-score">
            <MovieScoreBar percentage={data.score}></MovieScoreBar>
          </div>
          <div className="searchMoviesResultRow-data-genres">
            {data.genres &&
              data.genres.map((genre) => {
                return `${genre.name}, `;
              })}
          </div>
          <div className="searchMoviesResultRow-data-flexDummy"></div>
        </div>
      </div>
    </div>
  );
};
