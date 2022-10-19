import {
  WikipediaGetExtLinksResults,
  WikipediaError,
  WikipediaGetExtLinksQuery,
} from "./wikipedia.types";
import { useEffect, useState } from "react";
import mergeResponses from "../mergeResponses";
import sanitizeParameter from "../sanitizeParameter";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<WikipediaGetExtLinksResults>();
  const [error, setError] = useState<WikipediaError>();
  const [continueStr, setContinueStr] = useState<string>("");

  useEffect(() => {
    if (loading && pageIds.length > 0) {
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extlinks&list=&formatversion=latest&pageids=${pageIds.join(
          "|"
        )}${limit ? "&ellimit=" + limit : "&ellimit=500"}${continueStr}`
      )
        .then((response) => response.json())
        .then((result: WikipediaGetExtLinksResults) => {
          if (result.warnings?.extlinks.warnings) {
            console.warn(result.warnings.extlinks.warnings);
          }
          if (result.error) {
            console.error(result.error);
          }

          setData(mergeResponses(data!, result) as WikipediaGetExtLinksResults);
          if (!limit && result?.continue) {
            setContinueStr(
              `&continue=${sanitizeParameter(
                result?.continue?.continue
              )}&elcontinue=${sanitizeParameter(result?.continue?.elcontinue)}`
            );
          } else {
            setLoading(false);
            setContinueStr("");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
          setError(error);
        });
    }

    // eslint-disable-next-line
  }, [continueStr, pageIds]);

  return { loading, data, error };
}
