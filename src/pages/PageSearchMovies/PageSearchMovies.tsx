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
    <>
      {results.loading && <LoadingAnimation />}
      <div className="pageSearchMovies page">
        {isResultReturned && (
          <>
            <div className="pageHeadText">
              Search results for "{searchParams}"
            </div>
            <MoviesList list={results.data!.searchMovies} />
          </>
        )}
        {!isResultReturned && !results.loading && (
          <div className="pageHeadText">No results</div>
        )}
      </div>
    </>
  );
};
