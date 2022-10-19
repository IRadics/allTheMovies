import sanitizeParameter from "../sanitizeParameter";
import {
  WikipediaError,
  WikipediaSearchResults,
  WikipediaSearchQuery,
} from "./wikipedia.types";
import { useEffect, useState } from "react";

export function useWikiSearch(
  searchTerm: string,
  limit: number,
  offset?: number
): WikipediaSearchQuery {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<WikipediaSearchResults>();
  const [error, setError] = useState<WikipediaError>();
  useEffect(() => {
    if (searchTerm && limit) {
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=&list=search&formatversion=latest&srsearch=${sanitizeParameter(
          searchTerm
        )}&srlimit=${limit}${offset ? "&sroffset=" + offset : ""}`
      )
        .then((response) => response.json())
        .then((result: WikipediaSearchResults) => {
          if (result.warnings?.search?.warnings) {
            console.warn(result.warnings.search.warnings);
          }
          if (result.error) {
            console.error(result.error);
          }
          setLoading(false);
          setData(result);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          setError(error);
        });
    }
    // eslint-disable-next-line
  }, [searchTerm, limit]);

  return { loading, data, error };
}
