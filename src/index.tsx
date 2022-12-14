import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageSearchMovies } from "./pages/PageSearchMovies/PageSearchMovies";
import { PageMovieInfo } from "./pages/PageMovieInfo/PageMovieInfo";
import { PageListRelatedMovies } from "./pages/PageSearchRelatedMovies.tsx/PageListRelatedMovies";
import { PagePopularMovies } from "./pages/PagePopularMovies/PagePopularMovies";
import { PageUpcomingMovies } from "./pages/PageUpcomingMovies/PageUpcomingMovies";

const apolloClient = new ApolloClient({
  uri: "https://tmdb.sandbox.zoosh.ie/dev/grphql",
  cache: new InMemoryCache({
    typePolicies: {
      Poster: {
        merge: true,
      },
      Movie: {
        keyFields: ["id"],
        fields: {
          recommended: {
            keyArgs: ["id"],
          },
        },
      },
    },
  }),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <PageSearchMovies />,
      },
      {
        path: "movie/:movieId",
        element: <PageMovieInfo />,
      },
      {
        path: "related/:parentMovieId",
        element: <PageListRelatedMovies />,
      },
      {
        path: "popular",
        element: <PagePopularMovies />,
      },
      {
        path: "/",
        element: <PagePopularMovies />,
      },
      {
        path: "upcoming",
        element: <PageUpcomingMovies />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
