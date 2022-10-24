import mergeResponses from "../../mergeResponses";
import parseWikiQueryParams from "../functions/parseWikiQueryParams";
import {
  WikipediaGetExtLinksResults,
  WikipediaQueryError,
} from "../types/wikipedia.types";
import { WikipediaApiPropExtlinks } from "../types/wikipediaApi.interfaces";

export default async function wikiGetExtLinks(
  params: WikipediaApiPropExtlinks,
  onSuccess: (data: WikipediaGetExtLinksResults) => void,
  onError: (error: WikipediaQueryError) => void
) {
  const limitSet = params.ellimit !== undefined;

  if (!limitSet) {
    params.ellimit = 500;
  }

  let data: WikipediaGetExtLinksResults = {};

  const fetchQuery = async () => {
    await fetch(
      parseWikiQueryParams("https://en.wikipedia.org/w/api.php?", params)
    )
      .then((response) => response.json())
      .then((result: WikipediaGetExtLinksResults) => {
        if (result.warnings?.extlinks.warnings) {
          console.warn(result.warnings.extlinks.warnings);
        }
        if (result.error) {
          console.error(result.error);
          onError(result.error);
          return;
        } else {
          data = mergeResponses(data!, result, [
            "extlinks",
          ]) as WikipediaGetExtLinksResults;
        }

        if (!limitSet && !result.batchcomplete) {
          params.continue = encodeURIComponent(data.continue?.continue!);
          params.elcontinue = encodeURIComponent(data.continue?.elcontinue!);

          fetchQuery();
        } else {
          onSuccess(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        onError(error);
        return;
      });
  };

  fetchQuery();
}
