import { WikipediaGetExtractResult, WikipediaError } from "./wikipedia.types";
import { useEffect, useState } from "react";

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
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<WikipediaGetExtractResult>();
  const [error, setError] = useState<WikipediaError>();

  if (options) {
    var { onlyIntro, plainText, characterLimit, sentenceLimit } = options;
  }

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&exsectionformat=plain&formatversion=latest${
        sentenceLimit ? "&exsentences=" + sentenceLimit : ""
      }${characterLimit ? "&exchars=" + characterLimit : ""}${
        onlyIntro ? "&exintro=1" : ""
      }${plainText ? "&explaintext=1" : ""}&pageids=${pageid}`
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.warnings?.pages?.warnings) {
          console.log(result.warnings.pages.warnings);
        }
        setLoading(false);
        setData(result);
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
