import { MoviesListRow } from "../MoviesListRow/MoviesListRow";
import { MovieResultsFragment } from "../../graphql/generated-types";
import "./MoviesList.css";

export const MoviesList: React.FC<{ list: MovieResultsFragment[] }> = ({
  list,
}) => {
  return (
    <div className="moviesList-container">
      {list.map((movie, index) => {
        return <MoviesListRow data={movie} key={index}></MoviesListRow>;
      })}
    </div>
  );
};
