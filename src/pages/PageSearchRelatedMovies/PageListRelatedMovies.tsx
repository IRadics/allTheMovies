import "./PageListRelatedMovies.css";
import { LoadingAnimation } from "../../components/LoadingAnimation/LoadingAnimation";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useParams } from "react-router-dom";
import {
  MovieFragment,
  useGetRecommendedMoviesQuery,
} from "../../graphql/generated-types";

export const PageListRelatedMovies: React.FC = () => {
  let { parentMovieId } = useParams();

  const results = useGetRecommendedMoviesQuery({
    variables: { id: parentMovieId! },
    fetchPolicy: "cache-and-network",
    returnPartialData: true,
  });

  const movies = results?.data?.movies?.movie?.recommendations?.edges?.map(
    (e) => e?.node
  );
  const isResultReturned = movies && movies.length > 0;

  return (
    <>
      <div className="pageSearchMovies page">
        {isResultReturned && (
          <>
            <div className="pageHeadText">
              Similiar movies to {results.data?.movies.movie.title}
            </div>
            <MoviesList list={movies as MovieFragment[]} />
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
