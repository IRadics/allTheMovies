import {
  WikipediaGetExtractResult,
  WikipediaGetExtractQuery,
  WikipediaQueryError,
} from "../types/wikipedia.types";
import { useEffect, useMemo, useState } from "react";
import { WikipediaApiPropExtracts } from "../types/wikipediaApi.interfaces";
import wikiGetExtract from "../queries/wikiGetExtract";

/**
 * Extracts the text content from a wikipedia page
 * @param pageid page ID of the wikipedia page
 * @param options
 * ```
 *    {
 *    onlyIntro, //gets only the text until the first wiki section
 *    plainText, //gets the text in plain text, without any html/wiki formatting code
 *
 *    // limits the extracted text's lenght. Only one kind of limit can be used at once
 *    sentenceLimit, // range: 1-20
 *    characterLimit, // range: 1-1200
 *    }
 * ```
 *
 * @returns
 * WikipediaGetExtractQuery
 * ```
 * {loading, data, error}
 * ```
 *
 */
export function useWikiGetExtract(
  pageid: number,
  options?: { onlyIntro?: boolean; plainText?: boolean } & (
    | { sentenceLimit?: number; characterLimit?: never }
    | { sentenceLimit?: number; characterLimit?: never }
  )
): WikipediaGetExtractQuery {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<WikipediaGetExtractResult>();
  const [error, setError] = useState<WikipediaQueryError>();

  if (options) {
    var { onlyIntro, plainText, characterLimit, sentenceLimit } = options;
  }

  const params: WikipediaApiPropExtracts = useMemo(
    () => ({
      action: "query",
      format: "json",
      origin: "*",
      formatversion: "latest",
      prop: ["extracts"],
      pageids: pageid,
      exchars: characterLimit,
      exsentences: sentenceLimit,
      exintro: onlyIntro,
      explaintext: plainText,
    }),
    [pageid, characterLimit, sentenceLimit, onlyIntro, plainText]
  );

  useEffect(() => {
    if (pageid) {
      setLoading(true);
      wikiGetExtract(
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
  }, [pageid, params]);

  return { loading, data, error };
}
