import { useFetchUpcomingMoviesQuery } from "../../graphql/generated-types";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export const PageUpcomingMovies: React.FC = () => {
  const results = useFetchUpcomingMoviesQuery();
  const isResultReturned = results.data && results.data.movies.length > 0;

  return (
    <>
      {results.loading && <LoadingAnimation />}
      <div className="pageSearchMovies page">
        {isResultReturned && (
          <>
            <div className="pageHeadText">Upcoming Movies</div>
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
