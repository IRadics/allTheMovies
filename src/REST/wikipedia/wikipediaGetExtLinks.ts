import { WikipediaGetExtLinksResults, WikipediaError } from "./wikipedia.types";

export function wikipediaGetExtLinks(
  pageid: number,
  limit: number,
  successCallback: (results: WikipediaGetExtLinksResults) => void,
  errorCallback?: (error: WikipediaError) => void
) {
  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extlinks&list=&formatversion=latest&pageids=${pageid}&ellimit=${limit}`
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.warnings?.pages?.warnings) {
        console.log(result.warnings.pages.warnings);
      }

      successCallback(result as WikipediaGetExtLinksResults);
    })
    .catch((error) => {
      console.error("Error:", error);
      if (errorCallback) errorCallback(error as WikipediaError);
    });
}
