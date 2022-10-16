/* 
    Search Results
*/

export type WikipediaSearchQuery = {
  loading: boolean;
  data: WikipediaSearchResults | undefined;
  error: WikipediaError | undefined;
};

export type WikipediaSearchResults = {
  batchcomplete: boolean;
  continue: ContinueSearch;
  query: Query;
  warnings: WarningsSearch;
  error: Error;
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

export type WikipediaError = {
  error: Error;
  servedby: string;
};

type Error = {
  code: string;
  info: string;
  docref: string;
};

/*
  Extract results
*/

export type WikipediaGetExtractQuery = {
  loading: boolean;
  data: WikipediaGetExtractResult | undefined;
  error: WikipediaError | undefined;
};

export type WikipediaGetExtractResult = {
  batchcomplete: boolean;
  query: QueryGetExtractResults;
  warnings: WarningsGetExtract;
  continue: ContinueGetExtract;
  error: Error;
};

type ContinueGetExtract = {
  excontinue: number;
  continue: string;
};

type WarningsGetExtract = {
  extracts: Warnings;
};

type QueryGetExtractResults = {
  pages: PageGetExtractResults[];
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
  data: WikipediaGetExtLinksResults | undefined;
  error: WikipediaError | undefined;
};

export type WikipediaGetExtLinksResults = {
  continue: ContinueGetExtLinks;
  query: QueryGetExtLinks;
  warnings: WarningsGetExtLinks;
  error: Error;
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
