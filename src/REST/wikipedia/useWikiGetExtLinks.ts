import {
  WikipediaGetExtLinksResults,
  WikipediaError,
  WikipediaGetExtLinksQuery,
} from "./wikipedia.types";
import { useEffect, useState } from "react";

export function useWikiGetExtLinks(
  pageid: number,
  limit: number
): WikipediaGetExtLinksQuery {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<WikipediaGetExtLinksResults>();
  const [error, setError] = useState<WikipediaError>();

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extlinks&list=&formatversion=latest&pageids=${pageid}&ellimit=${limit}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.warnings?.pages?.warnings) {
          console.log(result.warnings.pages.warnings);
        }
        setLoading(false);
        setData(result as WikipediaGetExtLinksResults);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setError(error);
      });
    // eslint-disable-next-line
  }, []);

  return { loading, data, error };
}
