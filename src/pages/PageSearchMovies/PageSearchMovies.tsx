import "./PageSearchMovies.css";
import { useSearchMoviesQuery } from "../../graphql/generated-types";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export const PageSearchMovies: React.FC = () => {
  let [searchParams] = useSearchParams();

  const results = useSearchMoviesQuery({
    variables: { query: searchParams.toString() },
  });

  const isResultReturned = results.data && results.data.searchMovies.length > 0;

  return (
    <div className="pageSearchMovies">
      {results.loading && <LoadingAnimation />}
      {isResultReturned && (
        <>
          <h1>Search results for "{searchParams}"</h1>
          <MoviesList list={results.data!.searchMovies} />
        </>
      )}
      {!isResultReturned && <h1>No results</h1>}
    </div>
  );
};
