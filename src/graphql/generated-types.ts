import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  ISODate: any;
  LanguageCode: any;
  PageRange: any;
  RegionCode: any;
  ScoreMaximumRange: any;
  ScoreMinimumRange: any;
  URL: any;
};

export type Backdrop = Image & {
  __typename?: 'Backdrop';
  colors?: Maybe<ExtractedColors>;
  custom?: Maybe<Scalars['URL']>;
  file?: Maybe<Scalars['String']>;
  /** w1280 */
  large?: Maybe<Scalars['URL']>;
  /** w780 */
  medium?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  /** w300 */
  small?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
};


export type BackdropcustomArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type BackdroporiginalArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type BackdropsvgArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export type Cast = {
  __typename?: 'Cast';
  character: Scalars['String'];
  credit: Credit;
};

export type Collection = {
  __typename?: 'Collection';
  backdrop?: Maybe<Backdrop>;
  id: Scalars['ID'];
  images: Array<MediaImage>;
  name: Scalars['String'];
  overview: Scalars['String'];
  parts: Array<Movie>;
  poster?: Maybe<Poster>;
};


export type CollectionpartsArgs = {
  language?: InputMaybe<Translations>;
};

export type Company = {
  __typename?: 'Company';
  country: Country;
  description: Scalars['String'];
  headquarters: Scalars['String'];
  homepage: Scalars['URL'];
  id: Scalars['ID'];
  images: Array<Logo>;
  logo: Logo;
  name: Scalars['String'];
  parentCompany?: Maybe<Company>;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type Credit = {
  __typename?: 'Credit';
  id: Scalars['ID'];
  media: Media;
  person?: Maybe<Person>;
  role: CreditType;
};

export type CreditType = Cast | Crew;

export type Crew = {
  __typename?: 'Crew';
  credit: Credit;
  department: Scalars['String'];
  job: Scalars['String'];
};

/** Used to filter Dates. Has no effect if both inputs are omited. */
export type DateRangeInput = {
  /** Include from the given Date forward */
  from?: InputMaybe<Scalars['ISODate']>;
  /** Include up to the given Date */
  to?: InputMaybe<Scalars['ISODate']>;
};

export enum Direction {
  /** Ascending, ie: 1..2..3.. or A..B..C.. */
  ASC = 'ASC',
  /** Descending, ie: 3..2..1.. or C..B..A.. */
  DESC = 'DESC'
}

export type DiscoverMoviesFilter = {
  includeAdult?: InputMaybe<Scalars['Boolean']>;
  includeVideo?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Translations>;
  primaryReleaseDate?: InputMaybe<DateRangeInput>;
  primaryReleaseYear?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['RegionCode']>;
  releaseDate?: InputMaybe<DateRangeInput>;
  voteAverage?: InputMaybe<VoteAverageInput>;
  voteCount?: InputMaybe<NumberRangeInput>;
  withCast?: InputMaybe<IDListInput>;
  withCompanies?: InputMaybe<IDListInput>;
  withCrew?: InputMaybe<IDListInput>;
  withGenres?: InputMaybe<IDListInput>;
  withKeywords?: InputMaybe<KeywordInput>;
  withOriginalLanguage?: InputMaybe<Translations>;
  withPeople?: InputMaybe<IDListInput>;
  withReleaseType?: InputMaybe<ReleaseTypeInput>;
  withRuntime?: InputMaybe<NumberRangeInput>;
  year?: InputMaybe<Scalars['Int']>;
};

export enum DiscoverMoviesSortBy {
  OriginalTitle = 'OriginalTitle',
  Popularity = 'Popularity',
  PrimaryReleaseDate = 'PrimaryReleaseDate',
  ReleaseDate = 'ReleaseDate',
  Revenue = 'Revenue',
  VoteAverage = 'VoteAverage',
  VoteCount = 'VoteCount'
}

export type DiscoverMoviesSortInput = {
  by?: InputMaybe<DiscoverMoviesSortBy>;
  direction?: InputMaybe<Direction>;
};

export type DiscoverTVFilter = {
  airDate?: InputMaybe<DateRangeInput>;
  firstAired?: InputMaybe<DateRangeInput>;
  firstAiredYear?: InputMaybe<Scalars['Int']>;
  includeUnaired?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Translations>;
  screenedTheatrically?: InputMaybe<Scalars['Boolean']>;
  timeZone?: InputMaybe<Scalars['String']>;
  voteAverage?: InputMaybe<VoteAverageInput>;
  voteCount?: InputMaybe<NumberRangeInput>;
  withCompanies?: InputMaybe<IDListInput>;
  withGenres?: InputMaybe<IDListInput>;
  withKeywords?: InputMaybe<KeywordInput>;
  withNetworks?: InputMaybe<IDListInput>;
  withOriginalLanguage?: InputMaybe<Translations>;
  withRuntime?: InputMaybe<NumberRangeInput>;
};

export enum DiscoverTVSortBy {
  FirstAirDate = 'FirstAirDate',
  Popularity = 'Popularity',
  VoteAverage = 'VoteAverage'
}

export type DiscoverTVSortInput = {
  by?: InputMaybe<DiscoverTVSortBy>;
  direction?: InputMaybe<Direction>;
};

export type Episode = {
  __typename?: 'Episode';
  aired: Scalars['DateTime'];
  cast: Array<Credit>;
  crew: Array<Credit>;
  guests: Array<Credit>;
  id: Scalars['ID'];
  images: Array<Still>;
  name: Scalars['String'];
  number: Scalars['Int'];
  overview: Scalars['String'];
  score: Scalars['Float'];
  season: Season;
  series: TV;
  still?: Maybe<Still>;
  videos: Array<Video>;
  votes: Scalars['Int'];
};


export type EpisodecastArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type EpisodecrewArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type EpisodeguestsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type EpisodevideosArgs = {
  filter?: InputMaybe<VideoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Translations>;
};

export enum EpisodeVideoType {
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  Recap = 'Recap',
  Teaser = 'Teaser',
  Trailer = 'Trailer'
}

export type ExtractedColors = {
  __typename?: 'ExtractedColors';
  darkMuted?: Maybe<Array<Maybe<Scalars['Int']>>>;
  darkVibrant?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lightMuted?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lightVibrant?: Maybe<Array<Maybe<Scalars['Int']>>>;
  muted?: Maybe<Array<Maybe<Scalars['Int']>>>;
  vibrant?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown'
}

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IDListInput = {
  exclude?: InputMaybe<Array<Scalars['ID']>>;
  include?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  /** A hash of extracted colors from the image. */
  colors?: Maybe<ExtractedColors>;
  /** Returns a URL for an image with the given dimensions or a generated SVG as either a URL or a base64 encoded data URI. */
  custom?: Maybe<Scalars['URL']>;
  /** The filename of the image. Used to construct URLs given a base URL and a size. */
  file?: Maybe<Scalars['String']>;
  /** Returns a URL for an image in it's original size or a generated SVG as either a URL or a base64 encoded data URI. */
  original?: Maybe<Scalars['URL']>;
  /** Returns either a URL to or a base64 encoded data URI of the image. */
  svg?: Maybe<Scalars['URL']>;
};


export type ImagecustomArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type ImageoriginalArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type ImagesvgArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
};

export type Job = {
  __typename?: 'Job';
  department: Scalars['String'];
  name: Scalars['String'];
};

export type Keyword = {
  __typename?: 'Keyword';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type KeywordInput = {
  exclude?: InputMaybe<Array<Scalars['ID']>>;
  excludeLogic?: InputMaybe<Logic>;
  include?: InputMaybe<Array<Scalars['ID']>>;
  includeLogic?: InputMaybe<Logic>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String'];
  name: Scalars['String'];
};

export enum Logic {
  AND = 'AND',
  OR = 'OR'
}

export type Logo = Image & {
  __typename?: 'Logo';
  colors?: Maybe<ExtractedColors>;
  custom?: Maybe<Scalars['URL']>;
  file?: Maybe<Scalars['String']>;
  /** w500 */
  huge?: Maybe<Scalars['URL']>;
  /** w45 */
  icon?: Maybe<Scalars['URL']>;
  /** w300 */
  large?: Maybe<Scalars['URL']>;
  /** w185 */
  medium?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  /** w154 */
  small?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
  /** w92 */
  tiny?: Maybe<Scalars['URL']>;
};


export type LogocustomArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type LogooriginalArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type LogosvgArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
};

export type Media = Movie | TV;

export type MediaImage = Backdrop | Poster;

export enum MediaType {
  Movie = 'Movie',
  TV = 'TV'
}

export type Movie = {
  __typename?: 'Movie';
  adult: Scalars['Boolean'];
  backdrop?: Maybe<Backdrop>;
  budget: Scalars['Int'];
  cast: Array<Credit>;
  collection?: Maybe<Collection>;
  country: Array<Country>;
  crew: Array<Credit>;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  images: Array<MediaImage>;
  keywords: Array<Keyword>;
  languages: Array<Language>;
  name: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  poster?: Maybe<Poster>;
  productionCompanies: Array<Company>;
  recommended: Array<Movie>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  revenue: Scalars['String'];
  reviews: Array<Review>;
  runtime?: Maybe<Scalars['Int']>;
  score: Scalars['Float'];
  similar: Array<Movie>;
  socialMedia?: Maybe<SocialMedia>;
  status: ReleaseStatus;
  tagline?: Maybe<Scalars['String']>;
  videos: Array<Video>;
  votes: Scalars['Int'];
};


export type MoviecastArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type MoviecollectionArgs = {
  language?: InputMaybe<Translations>;
};


export type MoviecrewArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type MovierecommendedArgs = {
  language?: InputMaybe<Translations>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type MoviereviewsArgs = {
  language?: InputMaybe<Translations>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type MoviesimilarArgs = {
  language?: InputMaybe<Translations>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type MovievideosArgs = {
  filter?: InputMaybe<VideoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Translations>;
};

export enum MovieVideoType {
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Clip = 'Clip',
  Featurette = 'Featurette',
  Teaser = 'Teaser',
  Trailer = 'Trailer'
}

export type Network = {
  __typename?: 'Network';
  country: Scalars['String'];
  headquarters: Scalars['String'];
  homepage: Scalars['URL'];
  id: Scalars['ID'];
  images: Array<Logo>;
  name: Scalars['String'];
};

/** Used to filter video runtimes in Minutes */
export type NumberRangeInput = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};

export enum Palette {
  darkMuted = 'darkMuted',
  darkVibrant = 'darkVibrant',
  lightMuted = 'lightMuted',
  lightVibrant = 'lightVibrant',
  muted = 'muted',
  vibrant = 'vibrant'
}

export type Person = {
  __typename?: 'Person';
  adult: Scalars['Boolean'];
  aliases: Array<Scalars['String']>;
  appearsIn: Array<Media>;
  biography: Scalars['String'];
  birthday?: Maybe<Scalars['DateTime']>;
  birthplace?: Maybe<Scalars['String']>;
  credits: Array<Credit>;
  diedOn?: Maybe<Scalars['DateTime']>;
  gender: Gender;
  homepage?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  images: Array<Photo>;
  knownFor: Scalars['String'];
  name: Scalars['String'];
  photo: Photo;
  socialMedia?: Maybe<SocialMedia>;
  taggedImages: Array<MediaImage>;
  workedOn: Array<Media>;
};


export type PersonappearsInArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type PersoncreditsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  type: Array<MediaType>;
};


export type PersonworkedOnArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Photo = Image & {
  __typename?: 'Photo';
  colors?: Maybe<ExtractedColors>;
  custom?: Maybe<Scalars['URL']>;
  file?: Maybe<Scalars['String']>;
  /** h632 */
  large?: Maybe<Scalars['URL']>;
  /** w185 */
  medium?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  /** w45 */
  small?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
};


export type PhotocustomArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type PhotooriginalArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type PhotosvgArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
};

export type Poster = Image & {
  __typename?: 'Poster';
  colors?: Maybe<ExtractedColors>;
  custom?: Maybe<Scalars['URL']>;
  file?: Maybe<Scalars['String']>;
  /** w780 */
  huge?: Maybe<Scalars['URL']>;
  /** w500 */
  large?: Maybe<Scalars['URL']>;
  /** w342 */
  medium?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  /** w185 */
  small?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
  /** w92 */
  thumbnail?: Maybe<Scalars['URL']>;
  /** w154 */
  tiny?: Maybe<Scalars['URL']>;
};


export type PostercustomArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type PosteroriginalArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type PostersvgArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  airingThisWeek: Array<TV>;
  airingToday: Array<TV>;
  collection: Collection;
  countries: Array<Country>;
  discoverMovies: Array<Movie>;
  discoverTV: Array<TV>;
  jobs: Array<Job>;
  languages: Array<Language>;
  latestMovie: Movie;
  latestPerson: Person;
  latestTV: TV;
  movie: Movie;
  movieGenres: Array<Genre>;
  movies: Array<Movie>;
  nowPlaying: Array<Movie>;
  people: Array<Person>;
  person: Person;
  popularMovies: Array<Movie>;
  popularPeople: Array<Person>;
  popularTV: Array<TV>;
  review: Review;
  reviews: Array<Review>;
  search: Array<SearchResult>;
  searchMovies: Array<Movie>;
  searchPeople: Array<Person>;
  searchTV: Array<TV>;
  shows: Array<TV>;
  timezones: Array<Timezone>;
  topRatedMovies: Array<Movie>;
  topRatedTV: Array<TV>;
  trending: Array<SearchResult>;
  trendingMovies: Array<Movie>;
  trendingPeople: Array<Person>;
  trendingTV: Array<TV>;
  tv: TV;
  tvGenres: Array<Genre>;
  upcomingMovies: Array<Movie>;
};


export type QueryairingThisWeekArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QueryairingTodayArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QuerycollectionArgs = {
  id: Scalars['ID'];
  language?: InputMaybe<Translations>;
};


export type QuerydiscoverMoviesArgs = {
  filter?: InputMaybe<DiscoverMoviesFilter>;
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
  sortBy?: InputMaybe<DiscoverMoviesSortInput>;
};


export type QuerydiscoverTVArgs = {
  filter?: InputMaybe<DiscoverTVFilter>;
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
  sortBy?: InputMaybe<DiscoverTVSortInput>;
};


export type QuerylatestMovieArgs = {
  language?: InputMaybe<Translations>;
};


export type QuerylatestPersonArgs = {
  language?: InputMaybe<Translations>;
};


export type QuerylatestTVArgs = {
  language?: InputMaybe<Translations>;
};


export type QuerymovieArgs = {
  id: Scalars['ID'];
  language?: InputMaybe<Translations>;
};


export type QuerymovieGenresArgs = {
  language?: InputMaybe<Translations>;
};


export type QuerymoviesArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  language?: InputMaybe<Translations>;
};


export type QuerynowPlayingArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QuerypeopleArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  language?: InputMaybe<Translations>;
};


export type QuerypersonArgs = {
  id: Scalars['ID'];
  language?: InputMaybe<Translations>;
};


export type QuerypopularMoviesArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QuerypopularPeopleArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QuerypopularTVArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QueryreviewArgs = {
  id: Scalars['ID'];
};


export type QueryreviewsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
};


export type QuerysearchArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
  query: Scalars['String'];
};


export type QuerysearchMoviesArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
  query: Scalars['String'];
};


export type QuerysearchPeopleArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
  query: Scalars['String'];
};


export type QuerysearchTVArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
  query: Scalars['String'];
};


export type QueryshowsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  language?: InputMaybe<Translations>;
};


export type QuerytopRatedMoviesArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QuerytopRatedTVArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type QuerytrendingArgs = {
  page?: InputMaybe<Scalars['PageRange']>;
  timeframe?: InputMaybe<TrendingTimeframe>;
};


export type QuerytrendingMoviesArgs = {
  page?: InputMaybe<Scalars['PageRange']>;
  timeframe?: InputMaybe<TrendingTimeframe>;
};


export type QuerytrendingPeopleArgs = {
  page?: InputMaybe<Scalars['PageRange']>;
  timeframe?: InputMaybe<TrendingTimeframe>;
};


export type QuerytrendingTVArgs = {
  page?: InputMaybe<Scalars['PageRange']>;
  timeframe?: InputMaybe<TrendingTimeframe>;
};


export type QuerytvArgs = {
  id: Scalars['ID'];
  language?: InputMaybe<Translations>;
};


export type QuerytvGenresArgs = {
  language?: InputMaybe<Translations>;
};


export type QueryupcomingMoviesArgs = {
  language?: InputMaybe<Translations>;
  page?: InputMaybe<Scalars['PageRange']>;
};

export enum ReleaseStatus {
  Canceled = 'Canceled',
  InProduction = 'InProduction',
  Planned = 'Planned',
  PostProduction = 'PostProduction',
  Released = 'Released',
  Rumored = 'Rumored'
}

export type ReleaseTypeInput = {
  /** How to combine the Release Types list, default: OR */
  logic?: InputMaybe<Logic>;
  /** Duplicate Release Types will be filtered */
  types?: InputMaybe<Array<ReleaseStatus>>;
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['ID'];
  language?: Maybe<Language>;
  media: Media;
  url: Scalars['URL'];
};

export type SearchResult = Movie | Person | TV;

export type Season = {
  __typename?: 'Season';
  aired: Scalars['DateTime'];
  cast: Array<Credit>;
  crew: Array<Credit>;
  episodeCount: Scalars['Int'];
  episodes: Array<Episode>;
  id: Scalars['ID'];
  images: Array<Poster>;
  name: Scalars['String'];
  number: Scalars['Int'];
  overview: Scalars['String'];
  poster?: Maybe<Poster>;
  series: TV;
  videos: Array<Video>;
};


export type SeasoncastArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type SeasoncrewArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type SeasonvideosArgs = {
  filter?: InputMaybe<VideoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Translations>;
};

export enum SeasonVideoType {
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  Recap = 'Recap',
  Teaser = 'Teaser',
  Trailer = 'Trailer'
}

export type SocialMedia = {
  __typename?: 'SocialMedia';
  facebook?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  imdb?: Maybe<Scalars['URL']>;
  instagram?: Maybe<Scalars['URL']>;
  twitter?: Maybe<Scalars['URL']>;
};

export type Still = Image & {
  __typename?: 'Still';
  colors?: Maybe<ExtractedColors>;
  custom?: Maybe<Scalars['URL']>;
  file?: Maybe<Scalars['String']>;
  /** w300 */
  large?: Maybe<Scalars['URL']>;
  /** w185 */
  medium?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
  /** w92 */
  small?: Maybe<Scalars['URL']>;
  svg?: Maybe<Scalars['URL']>;
};


export type StillcustomArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type StilloriginalArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  svg?: InputMaybe<Scalars['Boolean']>;
};


export type StillsvgArgs = {
  base64?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Palette>;
  size?: InputMaybe<Scalars['String']>;
};

export type TV = {
  __typename?: 'TV';
  backdrop?: Maybe<Backdrop>;
  cast: Array<Credit>;
  country: Array<Country>;
  createdBy: Array<Person>;
  crew: Array<Credit>;
  episodeCount: Scalars['Int'];
  episodes: Array<Episode>;
  firstAired: Scalars['DateTime'];
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  images: Array<MediaImage>;
  inProduction: Scalars['Boolean'];
  language: Language;
  languages: Array<Language>;
  lastAired: Scalars['DateTime'];
  name: Scalars['String'];
  networks: Array<Network>;
  originalName: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  poster?: Maybe<Poster>;
  productionCompanies: Array<Company>;
  recommended: Array<TV>;
  reviews: Array<Review>;
  runtime: Array<Scalars['Int']>;
  score: Scalars['Float'];
  seasonCount: Scalars['Int'];
  seasons: Array<Season>;
  similar: Array<TV>;
  socialMedia?: Maybe<SocialMedia>;
  status: TVStatus;
  type: TVType;
  videos: Array<Video>;
  votes: Scalars['Int'];
};


export type TVcastArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type TVcrewArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type TVrecommendedArgs = {
  language?: InputMaybe<Translations>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type TVreviewsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type TVsimilarArgs = {
  language?: InputMaybe<Translations>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['PageRange']>;
};


export type TVvideosArgs = {
  filter?: InputMaybe<VideoFilter>;
  first?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<Translations>;
};

export enum TVStatus {
  Canceled = 'Canceled',
  Ended = 'Ended',
  InProduction = 'InProduction',
  Pilot = 'Pilot',
  Planned = 'Planned',
  ReturningSeries = 'ReturningSeries'
}

export enum TVType {
  Documentary = 'Documentary',
  Miniseries = 'Miniseries',
  News = 'News',
  Reality = 'Reality',
  Scripted = 'Scripted',
  TalkShow = 'TalkShow'
}

export enum TVVideoType {
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  Teaser = 'Teaser',
  Trailer = 'Trailer'
}

export type Timezone = {
  __typename?: 'Timezone';
  code: Scalars['String'];
  zone: Scalars['String'];
};

export enum Translations {
  Bangla = 'Bangla',
  Basque = 'Basque',
  BokmalNorwegian = 'BokmalNorwegian',
  BrazilianPortuguese = 'BrazilianPortuguese',
  Bulgarian = 'Bulgarian',
  CanadianFrench = 'CanadianFrench',
  Catalan = 'Catalan',
  Chamorro = 'Chamorro',
  ChineseSimplified = 'ChineseSimplified',
  ChineseTraditional = 'ChineseTraditional',
  Czech = 'Czech',
  Danish = 'Danish',
  Dutch = 'Dutch',
  English = 'English',
  Esperanto = 'Esperanto',
  Farsi = 'Farsi',
  Finnish = 'Finnish',
  French = 'French',
  Georgian = 'Georgian',
  German = 'German',
  Greek = 'Greek',
  Hebrew = 'Hebrew',
  Hindi = 'Hindi',
  Hungarian = 'Hungarian',
  Indonesian = 'Indonesian',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Kannada = 'Kannada',
  Korean = 'Korean',
  Lithuanian = 'Lithuanian',
  Malayalam = 'Malayalam',
  MexicanSpanish = 'MexicanSpanish',
  Norwegian = 'Norwegian',
  Polish = 'Polish',
  Portuguese = 'Portuguese',
  Romanian = 'Romanian',
  Russian = 'Russian',
  SaudiArabianArabic = 'SaudiArabianArabic',
  Serbian = 'Serbian',
  Slovak = 'Slovak',
  Slovenian = 'Slovenian',
  Spanish = 'Spanish',
  Swedish = 'Swedish',
  Tamil = 'Tamil',
  Telugu = 'Telugu',
  Thai = 'Thai',
  Turkish = 'Turkish',
  UAEArabic = 'UAEArabic',
  Ukrainian = 'Ukrainian',
  Vietnamese = 'Vietnamese'
}

export enum TrendingTimeframe {
  Day = 'Day',
  Week = 'Week'
}

export type Video = {
  __typename?: 'Video';
  country: Country;
  id: Scalars['ID'];
  key: Scalars['String'];
  language: Language;
  name: Scalars['String'];
  site: Scalars['String'];
  /** One of value: 360, 480, 720, 1080 */
  size: Scalars['Int'];
  type: VideoType;
};

export type VideoFilter = {
  site?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Array<VideoType>>;
};

export enum VideoType {
  BehindtheScenes = 'BehindtheScenes',
  Bloopers = 'Bloopers',
  Clip = 'Clip',
  Featurette = 'Featurette',
  OpeningCredits = 'OpeningCredits',
  Recap = 'Recap',
  Teaser = 'Teaser',
  Trailer = 'Trailer'
}

/** Used to filter User Scores by Average Votes */
export type VoteAverageInput = {
  /** Integer between 1 and 10 */
  max?: InputMaybe<Scalars['ScoreMaximumRange']>;
  /** Integer between 0 and 10 */
  min?: InputMaybe<Scalars['ScoreMinimumRange']>;
};

export type MovieResultsFragment = { __typename?: 'Movie', id: string, name: string, overview: string, releaseDate?: any | null, score: number, genres: Array<{ __typename?: 'Genre', id: string, name: string }>, poster?: { __typename?: 'Poster', small?: any | null, medium?: any | null, large?: any | null, huge?: any | null } | null };

export type SearchMoviesQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: string, name: string, overview: string, releaseDate?: any | null, score: number, genres: Array<{ __typename?: 'Genre', id: string, name: string }>, poster?: { __typename?: 'Poster', small?: any | null, medium?: any | null, large?: any | null, huge?: any | null } | null }> };

export const MovieResultsFragmentDoc = gql`
    fragment MovieResults on Movie {
  id
  name
  overview
  releaseDate
  score
  overview
  genres {
    id
    name
  }
  poster {
    small
    medium
    large
    huge
  }
}
    `;
export const SearchMoviesDocument = gql`
    query SearchMovies($query: String!) {
  searchMovies(query: $query) {
    ...MovieResults
  }
}
    ${MovieResultsFragmentDoc}`;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;