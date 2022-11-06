import "./PageListRelatedMovies.css";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useParams } from "react-router-dom";
import { useGetRelatedMoviesQuery } from "../../graphql/generated-types";

export const PageListRelatedMovies: React.FC = () => {
  let { parentMovieId } = useParams();

  const results = useGetRelatedMoviesQuery({
    variables: { id: parentMovieId! },
    fetchPolicy: "cache-and-network",
    returnPartialData: true,
  });

  const isResultReturned =
    results.data && results.data.movie.recommended.length > 0;

  return (
    <>
      <div className="pageSearchMovies page">
        {isResultReturned && (
          <>
            <div className="pageHeadText">
              Similiar movies to {results.data?.movie.name}
            </div>
            <MoviesList list={results.data!.movie.recommended} />
          </>
        )}
        {!isResultReturned && !results.loading && (
          <div className="pageHeadText">No results</div>
        )}
      </div>
      {results.loading && <LoadingAnimation />}
    </>
  );
};
