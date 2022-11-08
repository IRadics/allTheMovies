import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageSearchMovies } from "./pages/PageSearchMovies/PageSearchMovies";
import { PageMovieInfo } from "./pages/PageMovieInfo/PageMovieInfo";
import { PageListRelatedMovies } from "./pages/PageSearchRelatedMovies/PageListRelatedMovies";
import { PagePopularMovies } from "./pages/PagePopularMovies/PagePopularMovies";
import { PageUpcomingMovies } from "./pages/PageUpcomingMovies/PageUpcomingMovies";
import { unionBy } from "lodash";

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_TMDB_GQL_URI,
  cache: new InMemoryCache({
    typePolicies: {
      MovieConnection: {
        fields: {
          edges: {
            //merge only unique movies
            merge(existing = [], incoming: any[], { readField }) {
              return unionBy(existing, incoming, (v) => {
                return readField<string>("id", v["node"]);
              });
            },
          },
        },
      },
      Movies: { merge: false },
      Movie: {
        keyFields: ["id"],
        fields: {
          similar: { keyArgs: ["@connection", ["key"]], merge: true },
          recommendations: { keyArgs: ["@connection", ["key"]], merge: true },
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
