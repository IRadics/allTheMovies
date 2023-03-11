import {
  MovieMinFragment,
  useFetchUpcomingMoviesQuery,
} from "../../graphql/generated-types";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export const PageUpcomingMovies: React.FC = () => {
  const results = useFetchUpcomingMoviesQuery();

  const movies = results?.data?.movies?.upcoming?.edges?.map((e) => e?.node);
  const isResultReturned = movies && movies.length > 0;

  return (
    <>
      {results.loading && <LoadingAnimation />}
      <div className="pageSearchMovies page">
        {isResultReturned && (
          <>
            <div className="pageHeadText">Upcoming Movies</div>
            <MoviesList list={movies as MovieMinFragment[]} />
          </>
        )}
        {!isResultReturned && !results.loading && (
          <div className="pageHeadText">No results</div>
        )}
      </div>
    </>
  );
};
