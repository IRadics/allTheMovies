import {
  WikipediaGetExtractResult,
  WikipediaError,
  WikipediaGetExtractQuery,
} from "./wikipedia.types";
import { useEffect, useState } from "react";
import mergeResponses from "../mergeResponses";
import sanitizeParameter from "../sanitizeParameter";

interface wikipediaGetExtractOptions {
  onlyIntro?: boolean;
  plainText?: boolean;
}

export interface wikipediaGetExtractOptionsWithCharacterLimit
  extends wikipediaGetExtractOptions {
  characterLimit?: number;
  sentenceLimit?: never;
}

export interface wikipediaGetExtractOptionsWithSentenceLimit
  extends wikipediaGetExtractOptions {
  sentenceLimit?: number;
  characterLimit?: never;
}

export function useWikiGetExtract(
  pageid: number,
  options?:
    | wikipediaGetExtractOptionsWithCharacterLimit
    | wikipediaGetExtractOptionsWithSentenceLimit
): WikipediaGetExtractQuery {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<WikipediaGetExtractResult>();
  const [error, setError] = useState<WikipediaError>();
  const [continueStr, setContinueStr] = useState<string>("");

  if (options) {
    var { onlyIntro, plainText, characterLimit, sentenceLimit } = options;
  }

  useEffect(() => {
    if (pageid) {
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&exsectionformat=plain&formatversion=latest${
          sentenceLimit ? "&exsentences=" + sentenceLimit : ""
        }${characterLimit ? "&exchars=" + characterLimit : ""}${
          onlyIntro ? "&exintro=1" : ""
        }${plainText ? "&explaintext=1" : ""}&pageids=${pageid}${continueStr}`
      )
        .then((response) => response.json())
        .then((result: WikipediaGetExtractResult) => {
          if (result.warnings?.extracts.warnings) {
            console.warn(result.warnings.extracts.warnings);
          }
          if (result.error) {
            console.error(result.error);
          }

          setData(mergeResponses(data!, result) as WikipediaGetExtractResult);
          if (result?.continue) {
            setContinueStr(
              `&continue=${sanitizeParameter(
                result?.continue.continue
              )}&excontinue=${result?.continue?.excontinue}`
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
  }, [continueStr, pageid]);

  return { loading, data, error };
}
