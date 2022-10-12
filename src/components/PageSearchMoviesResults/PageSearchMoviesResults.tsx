import { useSearchMoviesQuery } from "../../graphql/generated-types";
import { SearchMoviesResultRow } from "../../components/SearchMoviesResultRow/SearchMoviesResultRow";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { useSearchParams } from "react-router-dom";

export const PageSearchMoviesResults: React.FC = () => {
  let [searchParams] = useSearchParams();

  const results = useSearchMoviesQuery({
    variables: { query: searchParams.toString() },
  });

  return (
    <div>
      {results.loading && <LoadingAnimation></LoadingAnimation>}
      {!results.loading &&
        results.data?.searchMovies.map((result, index) => {
          return (
            <SearchMoviesResultRow
              data={result}
              key={index}
            ></SearchMoviesResultRow>
          );
        })}
      {!results.loading && !results.data?.searchMovies.length && (
        <h2>No results</h2>
      )}
    </div>
  );
};
