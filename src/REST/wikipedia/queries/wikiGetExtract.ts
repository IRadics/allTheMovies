import mergeResponses from "../../mergeResponses";
import sanitizeParameter from "../../sanitizeParameter";
import parseWikiQueryParams from "../functions/parseWikiQueryParams";
import {
  WikipediaGetExtractResult,
  WikipediaQueryError,
} from "../types/wikipedia.types";
import { WikipediaApiPropExtracts } from "../types/wikipediaApi.interfaces";

export default async function wikiGetExtract(
  params: WikipediaApiPropExtracts,
  onSuccess: (data: WikipediaGetExtractResult) => void,
  onError: (error: WikipediaQueryError) => void
) {
  let data: WikipediaGetExtractResult = {};

  const fetchQuery = async () => {
    await fetch(
      parseWikiQueryParams("https://en.wikipedia.org/w/api.php?", params)
    )
      .then((response) => response.json())
      .then((result: WikipediaGetExtractResult) => {
        if (result.warnings?.extracts.warnings) {
          console.warn(result.warnings.extracts.warnings);
        }
        if (result.error) {
          console.error(result.error);
          onError(result.error);
          return;
        } else {
          data = mergeResponses(data!, result) as WikipediaGetExtractResult;
        }

        if (!result.batchcomplete) {
          params.continue = sanitizeParameter(data.continue?.continue!);
          params.excontinue = data.continue?.excontinue;
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
