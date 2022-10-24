/* 
    Search Results
*/

export type WikipediaSearchQuery = {
  loading: boolean;
  data?: WikipediaSearchResults;
  error?: WikipediaQueryError;
};

export type WikipediaSearchResults = {
  batchcomplete?: boolean;
  continue?: ContinueSearch;
  query?: Query;
  warnings?: WarningsSearch;
  error?: WikipediaError;
  servedby?: string;
};

type ContinueSearch = {
  sroffset: number;
  continue: string;
};

type Query = {
  searchinfo: Searchinfo;
  search: Search[];
};

type Search = {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: Date;
};

type Searchinfo = {
  totalhits: number;
};

type WarningsSearch = {
  search: Warnings;
};

type Warnings = {
  warnings: string;
};

/* 
    Error
*/

type WikipediaError = {
  code: string;
  info: string;
  docref: string;
};

export type WikipediaQueryError = WikipediaError | string;

/*
  Extract results
*/

export type WikipediaGetExtractQuery = {
  loading: boolean;
  data?: WikipediaGetExtractResult;
  error?: WikipediaQueryError;
  servedby?: string;
};

export type WikipediaGetExtractResult = {
  batchcomplete?: boolean;
  query?: QueryGetExtractResults;
  warnings?: WarningsGetExtract;
  continue?: ContinueGetExtract;
  error?: WikipediaError;
};

type ContinueGetExtract = {
  excontinue: number;
  continue: string;
};

type WarningsGetExtract = {
  extracts: Warnings;
};

type QueryGetExtractResults = {
  pages: PageGetExtractResults[] | undefined;
};

type PageGetExtractResults = {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
};

/*
  GetExtLinks
*/
export type WikipediaGetExtLinksQuery = {
  loading: boolean;
  data?: WikipediaGetExtLinksResults;
  error?: WikipediaQueryError;
  servedby?: string;
};

export type WikipediaGetExtLinksResults = {
  continue?: ContinueGetExtLinks;
  query?: QueryGetExtLinks;
  warnings?: WarningsGetExtLinks;
  error?: WikipediaError;
  batchcomplete?: boolean;
};

type ContinueGetExtLinks = {
  elcontinue: string;
  continue: string;
};

export type QueryGetExtLinks = {
  pages: Page[];
};

export type Page = {
  pageid: number;
  ns: number;
  title: string;
  extlinks?: Extlink[];
};

export type Extlink = {
  url: string;
};

type WarningsGetExtLinks = {
  extlinks: Warnings;
};
