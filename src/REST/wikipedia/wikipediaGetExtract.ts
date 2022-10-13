import { WikipediaGetExtractResult, WikipediaError } from "./wikipedia.types";

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

export function wikipediaGetExtract(
  pageid: number,
  successCallback: (results: WikipediaGetExtractResult) => void,
  errorCallback?: (error: WikipediaError) => void,
  options?:
    | wikipediaGetExtractOptionsWithCharacterLimit
    | wikipediaGetExtractOptionsWithSentenceLimit
) {
  if (options) {
    var { onlyIntro, plainText, characterLimit, sentenceLimit } = options;
  }

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

      successCallback(result as WikipediaGetExtractResult);
    })
    .catch((error) => {
      console.error("Error:", error);
      if (errorCallback) errorCallback(error as WikipediaError);
    });
}
