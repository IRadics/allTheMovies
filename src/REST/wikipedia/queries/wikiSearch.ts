import mergeResponses from "../../mergeResponses";
import parseWikiQueryParams from "../functions/parseWikiQueryParams";
import {
  WikipediaQueryError,
  WikipediaSearchResults,
} from "../types/wikipedia.types";
import { WikipediaApiListSearch } from "../types/wikipediaApi.interfaces";
import FetchCache from "../../../utility/fetchCache";

export default async function wikiSearch(
  params: WikipediaApiListSearch,
  onSuccess: (data: WikipediaSearchResults) => void,
  onError: (error: WikipediaQueryError) => void
) {
  const limitSet = params.srlimit !== undefined;

  let data: WikipediaSearchResults = {};

  const { fetchWithCache } = new FetchCache();

  const fetchQuery = async () => {
    await fetchWithCache(
      parseWikiQueryParams("https://en.wikipedia.org/w/api.php?", params)
    )
      .then((response) => response.json())
      .then((result: WikipediaSearchResults) => {
        if (result.warnings?.search?.warnings) {
          console.warn(result.warnings.search.warnings);
        }
        if (result.error) {
          console.error(result.error);
          onError(result.error);
          return;
        } else {
          data = mergeResponses(data!, result) as WikipediaSearchResults;
        }

        if (!limitSet && !result.batchcomplete) {
          params.continue = encodeURIComponent(data.continue?.continue!);
          params.sroffset = data.continue?.sroffset;
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
