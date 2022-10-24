import {
  WikipediaGetExtLinksResults,
  WikipediaGetExtLinksQuery,
  WikipediaQueryError,
} from "../types/wikipedia.types";
import { useEffect, useMemo, useState } from "react";
import { WikipediaApiPropExtlinks } from "../types/wikipediaApi.interfaces";
import wikiGetExtLinks from "../queries/wikiGetExtLinks";

/**
 * Extracts all the external links on a Wikipedia page
 * @param pageIds array of Wiki page IDs
 * @param limit limit of how many external links to get. Note: this applies to the whole query, not per page.
 * @returns
 * WikipediaGetExtLinksQuery
 * ```
 * {loading, data, error}
 * ```
 *
 */
export function useWikiGetExtLinks(
  pageIds: number[],
  limit?: number
): WikipediaGetExtLinksQuery {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<WikipediaGetExtLinksResults>();
  const [error, setError] = useState<WikipediaQueryError>();

  const params: WikipediaApiPropExtlinks = useMemo(
    () => ({
      action: "query",
      format: "json",
      origin: "*",
      formatversion: "latest",
      prop: ["extlinks"],
      pageids: pageIds,
      ellimit: limit,
    }),
    [pageIds, limit]
  );

  useEffect(() => {
    if (pageIds.length > 0) {
      setLoading(true);
      wikiGetExtLinks(
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
  }, [pageIds, params]);

  return { loading, data, error };
}
