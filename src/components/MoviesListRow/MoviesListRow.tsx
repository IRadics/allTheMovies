import "./MoviesListRow.css";
import React from "react";
import { MovieMinFragment } from "../../graphql/generated-types";
import { MovieScoreBar } from "../MovieScoreBar/MovieScoreBar";
import { MoviePoster } from "../MoviePoster/MoviePoster";
import { useNavigateIfNew } from "../../hooks/useNavigateIfNew";

export const MoviesListRow: React.FC<{ data: MovieMinFragment }> = ({
  data,
}) => {
  const navigate = useNavigateIfNew();
  return (
    <div className="searchMoviesResultRow componentCard">
      <div className="searchMoviesResultRow-poster">
        <MoviePoster imgUrl={data.posterMedium} name={data.title} />
      </div>
      <div className="searchMoviesResultRow-data">
        <h2
          className="searchMoviesResultRow-data-title clickableText rtitle2"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/movie/${data.id}`);
          }}
        >
          {data.title}
        </h2>
        <span className="searchMoviesResultRow-data-overview">
          {data.overview}
        </span>
        <div className="searchMoviesResultRow-footer">
          <div className="searchMoviesResultRow-score">
            <MovieScoreBar percentage={data.rating}></MovieScoreBar>
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
