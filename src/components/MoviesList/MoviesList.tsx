import { MoviesListRow } from "../MoviesListRow/MoviesListRow";
import { MovieResultsFragment } from "../../graphql/generated-types";
import "./MoviesList.css";

interface MoviesListProps {
  list: MovieResultsFragment[];
}

export const MoviesList: React.FC<MoviesListProps> = ({ list }) => {
  return (
    <div className="moviesList-container">
      {list.map((movie, index) => {
        return <MoviesListRow data={movie} key={index}></MoviesListRow>;
      })}
    </div>
  );
};
