/* 
    Search Results
*/

export type WikipediaSearchResults = {
  batchcomplete: boolean;
  continue: Continue;
  query: Query;
  warnings: Warnings;
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

type Warnings = {
  search: SearchWarning[];
};

type SearchWarning = {
  warnings: string;
};

/* 
    Search Error
*/

export type WikipediaSearchError = {
  error: Error;
  servedby: string;
};

type Error = {
  code: string;
  info: string;
  docref: string;
};
