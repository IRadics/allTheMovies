import { MoviesListRow } from "../MoviesListRow/MoviesListRow";
import { MovieMinFragment } from "../../graphql/generated-types";
import "./MoviesList.css";

export const MoviesList: React.FC<{ list: MovieMinFragment[] }> = ({
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
