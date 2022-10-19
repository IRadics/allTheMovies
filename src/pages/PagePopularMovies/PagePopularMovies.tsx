import { useFetchPopularMoviesQuery } from "../../graphql/generated-types";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export const PagePopularMovies: React.FC = () => {
  const results = useFetchPopularMoviesQuery();
  const isResultReturned = results.data && results.data.movies.length > 0;

  return (
    <>
      {results.loading && <LoadingAnimation />}
      <div className="pageSearchMovies page">
        {isResultReturned && (
          <>
            <div className="pageHeadText">Popular movies</div>
            <MoviesList list={results.data!.movies} />
          </>
        )}
        {!isResultReturned && !results.loading && (
          <div className="pageHeadText">No results</div>
        )}
      </div>
    </>
  );
};
