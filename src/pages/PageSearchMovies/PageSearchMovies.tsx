import {
  MovieMinFragment,
  useSearchMoviesQuery,
} from "../../graphql/generated-types";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { useSearchParams } from "react-router-dom";
import { MoviesList } from "../../components/MoviesList/MoviesList";

export const PageSearchMovies: React.FC = () => {
  let [searchParams] = useSearchParams();

  const results = useSearchMoviesQuery({
    variables: { term: searchParams.toString() },
  });

  const movies = results.data?.movies?.search?.edges?.map((e) => e?.node);
  const isResultReturned = movies && movies.length > 0;
  const searchParamsText = searchParams.entries().next().value[0];

  return (
    <>
      {results.loading && <LoadingAnimation />}
      <div className="pageSearchMovies page">
        {isResultReturned && (
          <>
            <div className="pageHeadText">
              Search results for "{searchParamsText}"
            </div>
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
