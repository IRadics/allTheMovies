import { sanitizeParameter } from "../sanitizeParameter";
import { WikipediaError, WikipediaSearchResults } from "./wikipedia.types";

export function wikipediaSearch(
  searchTerm: string,
  limit: number,
  offset: number,
  successCallback: (results: WikipediaSearchResults) => void,
  errorCallback?: (error: WikipediaError) => void
) {
  fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=&list=search&formatversion=latest&srsearch=${sanitizeParameter(
      searchTerm
    )}&srlimit=${limit}${offset ? "&sroffset=" + offset : ""}`
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.warnings?.search?.warnings) {
        console.log(result.warnings.search.warnings);
      }

      successCallback(result as WikipediaSearchResults);
    })
    .catch((error) => {
      console.error("Error:", error);
      if (errorCallback) errorCallback(error as WikipediaError);
    });
}
