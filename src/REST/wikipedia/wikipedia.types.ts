/* 
    Search Results
*/

export type WikipediaSearchResults = {
  batchcomplete: boolean;
  continue: Continue;
  query: Query;
  warnings: WarningsSearch;
};

type Continue = {
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
  search: Warnings[];
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
export type WikipediaGetExtractResult = {
  batchcomplete: boolean;
  query: QueryGetExtractResults;
  warnings: WarningsGetExtract;
};

type WarningsGetExtract = {
  pages: Warnings[];
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
