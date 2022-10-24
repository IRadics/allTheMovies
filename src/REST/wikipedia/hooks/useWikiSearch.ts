import sanitizeParameter from "../../sanitizeParameter";
import {
  WikipediaSearchResults,
  WikipediaSearchQuery,
  WikipediaQueryError,
} from "../types/wikipedia.types";
import { WikipediaApiListSearch } from "../types/wikipediaApi.interfaces";
import { useEffect, useState } from "react";
import wikiSearch from "../queries/wikiSearch";

/**
 * Searches the wikipedia pages and returns them in order of relevance
 * @param searchTerm array of Wiki page IDs
 * @param limit limit of how many pages to return
 * @param offset from which search result number should it return the results.
 * @returns
 * WikipediaSearchQuery
 * ```
 * {loading, data, error}
 * ```
 *
 */
export function useWikiSearch(
  searchTerm: string,
  limit: number,
  offset?: number
): WikipediaSearchQuery {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<WikipediaSearchResults>();
  const [error, setError] = useState<WikipediaQueryError>();

  const params: WikipediaApiListSearch = {
    action: "query",
    format: "json",
    origin: "*",
    formatversion: "latest",
    list: ["search"],
    srsearch: sanitizeParameter(searchTerm),
    srlimit: 10,
    sroffset: offset,
    srsort: "relevance",
  };

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      wikiSearch(
        params,
        (d) => {
          setData(d);
          setLoading(false);
        },
        (e) => {
          setError(e);
          setLoading(false);
        }
      );
    }
    // eslint-disable-next-line
  }, [searchTerm, limit]);

  return { loading, data, error };
}
