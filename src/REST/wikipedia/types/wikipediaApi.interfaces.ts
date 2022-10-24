interface WikipediaApiFormatJson {
  callback?: string;
  utf8?: boolean;
  ascii?: boolean;
  formatversion: "1" | "2" | "latest";
}

export interface WikipediaApiMain {
  action: string;
  format: string;
  origin?: string;
}

interface WikipediaApiActionQuery
  extends WikipediaApiMain,
    WikipediaApiFormatJson {
  continue?: string;
  format: "json";
  prop?: string[] | string;
  list?: (
    | "abusefilters"
    | "abuselog"
    | "allcategories"
    | "alldeletedrevisions"
    | "allfileusages"
    | "allimages"
    | "alllinks"
    | "allpages"
    | "allredirects"
    | "allrevisions"
    | "alltransclusions"
    | "allusers"
    | "backlinks"
    | "betafeatures"
    | "blocks"
    | "categorymembers"
    | "centralnoticeactivecampaigns"
    | "centralnoticelogs"
    | "checkuser"
    | "checkuserlog"
    | "contenttranslation"
    | "contenttranslationcorpora"
    | "contenttranslationlangtrend"
    | "contenttranslationstats"
    | "contenttranslationsuggestions"
    | "cxpublishedtranslations"
    | "cxtranslatorstats"
    | "deprecated"
    | "embeddedin"
    | "exturlusage"
    | "filearchive"
    | "gadgetcategories"
    | "gadgets"
    | "geosearch"
    | "globalallusers"
    | "globalblocks"
    | "globalgroups"
    | "growthmentormentee"
    | "growthstarredmentees"
    | "internal"
    | "imageusage"
    | "iwbacklinks"
    | "langbacklinks"
    | "linterrors"
    | "logevents"
    | "internal"
    | "mostviewed"
    | "mystashedfiles"
    | "oldreviewedpages"
    | "pagepropnames"
    | "pageswithprop"
    | "prefixsearch"
    | "projectpages"
    | "projects"
    | "protectedtitles"
    | "querypage"
    | "random"
    | "recentchanges"
    | "search"
    | "tags"
    | "usercontribs"
    | "users"
    | "watchlist"
    | "watchlistraw"
    | "wblistentityusage"
    | "wikisets"
  )[];
  pageids?: number[] | number;
}

export interface WikipediaApiListSearch extends WikipediaApiActionQuery {
  /**Search for page titles or content matching this value. You can use the search string to invoke special search features, depending on what the wiki's search backend implements. */
  srsearch: string;
  /**How many total pages to return.
  The value must be between 1 and 500. Default: 10 */
  srlimit: number;
  /**When more results are available, use this to continue. */
  sroffset?: number;
  srsort?:
    | "create_timestamp_asc"
    | "create_timestamp_desc"
    | "incoming_links_asc"
    | "incoming_links_desc"
    | "just_match"
    | "last_edit_asc"
    | "last_edit_desc"
    | "none"
    | "random"
    | "relevance"
    | "user_random";
}

export interface WikipediaApiPropExtlinks extends WikipediaApiActionQuery {
  elcontinue?: string;
  /** How many links to return. The value must be between 1 and 500.*/
  ellimit?: number;
  /**Protocol of the URL. If empty and elquery is set, the protocol is http. Leave both this and elquery empty to list all external links. */
  elprotocol?:
    | "bitcoin"
    | "ftp"
    | "ftps"
    | "geo"
    | "git"
    | "gopher"
    | "http"
    | "https"
    | "irc"
    | "ircs"
    | "magnet"
    | "mailto"
    | "mms"
    | "news"
    | "nntp"
    | "redis"
    | "sftp"
    | "sip"
    | "sips"
    | "sms"
    | "ssh"
    | "svn"
    | "tel"
    | "telnet"
    | "urn"
    | "worldwind"
    | "xmpp";
  /**Search string without protocol. Useful for checking whether a certain page contains a certain external url. */
  elquery?: string;
  /**Expand protocol-relative URLs with the canonical protocol. */
  elexpandurl?: boolean;
}

export interface WikipediaApiPropExtracts extends WikipediaApiActionQuery {
  /** How many characters to return. Actual text returned might be slightly longer. The value must be between 1 and 1200 */
  exchars?: number;
  /** How many sentences to return. The value must be between 1 and 10. NOTE: Cannot be used with exsenceces within one query */
  exsentences?: number;
  /** How many extracts to return. (Multiple extracts can only be returned if exintro is set to true.) The value must be between 1 and 20. NOTE: Cannot be used with exchars within one query*/
  exlimit?: number;
  /**Return only content before the first section. */
  exintro?: boolean;
  /**Return extracts as plain text instead of limited HTML.*/
  explaintext?: boolean;
  /**How to format sections in plaintext mode: */
  exsectionformat?: "plain" | "raw" | "wiki";
  /**When more results are available, use this to continue. */
  excontinue?: number;
}
