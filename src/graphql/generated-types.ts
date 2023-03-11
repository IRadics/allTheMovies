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
  Date: any;
  URL: any;
};

export type AlternativeTitle = {
  __typename?: 'AlternativeTitle';
  iso3166_1: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type AnyImage = BackdropSizeDetailImage | LogoSizeDetailImage | PosterSizeDetailImage | ProfileSizeDetailImage | StillSizeDetailImage;

export enum BackdropSize {
  Original = 'Original',
  W300 = 'W300',
  W780 = 'W780',
  W1280 = 'W1280'
}

export type BackdropSizeDetailImage = {
  __typename?: 'BackdropSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type BackdropSizeDetailImageimageArgs = {
  size: BackdropSize;
};

export type CastCreditWithMovie = ICreditWithMovie & {
  __typename?: 'CastCreditWithMovie';
  character: Scalars['String'];
  id: Scalars['String'];
  value: Movie;
};

export type CastCreditWithMovieOrTV = ICreditWithMovieOrTV & {
  __typename?: 'CastCreditWithMovieOrTV';
  character: Scalars['String'];
  id: Scalars['String'];
  value: MovieOrTV;
};

export type CastCreditWithPerson = ICreditWithPerson & {
  __typename?: 'CastCreditWithPerson';
  character: Scalars['String'];
  id: Scalars['String'];
  value: Person;
};

export type CastCreditWithTVShow = ICreditWithTVShow & {
  __typename?: 'CastCreditWithTVShow';
  character: Scalars['String'];
  id: Scalars['String'];
  value: TVShow;
};

export type CreditWithMovie = ICreditWithMovie & {
  __typename?: 'CreditWithMovie';
  id: Scalars['String'];
  value: Movie;
};

export type CreditWithMovieOrTV = ICreditWithMovieOrTV & {
  __typename?: 'CreditWithMovieOrTV';
  id: Scalars['String'];
  value: MovieOrTV;
};

export type CreditWithPerson = ICreditWithPerson & {
  __typename?: 'CreditWithPerson';
  id: Scalars['String'];
  value: Person;
};

export type CreditWithTVShow = ICreditWithTVShow & {
  __typename?: 'CreditWithTVShow';
  id: Scalars['String'];
  value: TVShow;
};

export type CreditsWithMovie = {
  __typename?: 'CreditsWithMovie';
  cast: Array<CastCreditWithMovie>;
  crew: Array<CrewCreditWithMovie>;
  id: Scalars['Int'];
};

export type CreditsWithMovieOrTV = {
  __typename?: 'CreditsWithMovieOrTV';
  cast: Array<CastCreditWithMovieOrTV>;
  crew: Array<CrewCreditWithMovieOrTV>;
  id: Scalars['Int'];
};

export type CreditsWithPerson = ICreditsWithPerson & {
  __typename?: 'CreditsWithPerson';
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  id: Scalars['Int'];
};

export type CreditsWithTVShow = {
  __typename?: 'CreditsWithTVShow';
  cast: Array<CastCreditWithTVShow>;
  crew: Array<CrewCreditWithTVShow>;
  id: Scalars['Int'];
};

export type CrewCreditWithMovie = ICreditWithMovie & {
  __typename?: 'CrewCreditWithMovie';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: Movie;
};

export type CrewCreditWithMovieOrTV = ICreditWithMovieOrTV & {
  __typename?: 'CrewCreditWithMovieOrTV';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: MovieOrTV;
};

export type CrewCreditWithPerson = ICreditWithPerson & {
  __typename?: 'CrewCreditWithPerson';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: Person;
};

export type CrewCreditWithTVShow = ICreditWithTVShow & {
  __typename?: 'CrewCreditWithTVShow';
  department: Scalars['String'];
  id: Scalars['String'];
  job: Scalars['String'];
  value: TVShow;
};

export type Discover = {
  __typename?: 'Discover';
  movies: DiscoverMovies;
  tv: DiscoverTV;
};


export type DiscovermoviesArgs = {
  input?: InputMaybe<MovieDiscoverInput>;
};


export type DiscovertvArgs = {
  input?: InputMaybe<TVDiscoverInput>;
};

export type DiscoverDateFilter = {
  max?: InputMaybe<Scalars['Date']>;
  min?: InputMaybe<Scalars['Date']>;
};

export type DiscoverFloatFilter = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type DiscoverIncludeExcludeFilter = {
  exclude?: InputMaybe<Array<Scalars['ID']>>;
  include?: InputMaybe<Array<Scalars['ID']>>;
};

export type DiscoverIncludeFilter = {
  include: Array<Scalars['ID']>;
};

export type DiscoverInput = {
  cast?: InputMaybe<DiscoverIncludeFilter>;
  companies?: InputMaybe<DiscoverIncludeExcludeFilter>;
  crew?: InputMaybe<DiscoverIncludeFilter>;
  genres?: InputMaybe<DiscoverIncludeExcludeFilter>;
  keywords?: InputMaybe<DiscoverIncludeExcludeFilter>;
  people?: InputMaybe<DiscoverIncludeFilter>;
  rating?: InputMaybe<DiscoverFloatFilter>;
  runtime?: InputMaybe<DiscoverIntFilter>;
  streamingOptions?: InputMaybe<StreamingOptions>;
  voteCount?: InputMaybe<DiscoverIntFilter>;
};

export type DiscoverIntFilter = {
  max?: InputMaybe<Scalars['Int']>;
  min?: InputMaybe<Scalars['Int']>;
};

export type DiscoverMovies = {
  __typename?: 'DiscoverMovies';
  latest: MovieConnection;
  popular: MovieConnection;
  topRated: MovieConnection;
};


export type DiscoverMovieslatestArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverMoviespopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverMoviestopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DiscoverTV = {
  __typename?: 'DiscoverTV';
  latest: TVShowConnection;
  onTheAir: TVShowConnection;
  popular: TVShowConnection;
  topRated: TVShowConnection;
};


export type DiscoverTVlatestArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverTVonTheAirArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverTVpopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type DiscoverTVtopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Episode = IStreamable & Node & {
  __typename?: 'Episode';
  airDate?: Maybe<Scalars['Date']>;
  credits: EpisodeCreditsWithPerson;
  crew: Array<CrewCreditWithPerson>;
  episodeNumber: Scalars['Int'];
  externalIds: IExternalIDS;
  guestStars: Array<CastCreditWithPerson>;
  /** The id of the object */
  id: Scalars['ID'];
  images: EpisodeImages;
  name: Scalars['String'];
  next?: Maybe<Episode>;
  overview: Scalars['String'];
  previous?: Maybe<Episode>;
  productionCode: Scalars['String'];
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  season: Season;
  seasonNumber: Scalars['Int'];
  show: TVShow;
  still?: Maybe<Scalars['URL']>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  translations: Array<TranslationWithTranslatedMovieInfo>;
  videos: Array<Video>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
};


export type EpisodesearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type EpisodestillArgs = {
  size: StillSize;
};


export type EpisodestreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type EpisodeCreditsWithPerson = ICreditsWithPerson & {
  __typename?: 'EpisodeCreditsWithPerson';
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  guestStars: Array<CastCreditWithPerson>;
  id: Scalars['Int'];
  url: Scalars['URL'];
};

export type EpisodeImages = {
  __typename?: 'EpisodeImages';
  stills: Array<StillSizeDetailImage>;
};

export type ExternalIDS = IExternalIDS & {
  __typename?: 'ExternalIDS';
  facebook?: Maybe<Scalars['String']>;
  imdb?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export enum ExternalSource {
  Facebook = 'Facebook',
  Freebase = 'Freebase',
  Imdb = 'Imdb',
  Instagram = 'Instagram',
  Tvdb = 'Tvdb',
  Tvrage = 'Tvrage',
  Twitter = 'Twitter'
}

export type FromExternalIds = {
  __typename?: 'FromExternalIds';
  movies: Array<Movie>;
  people: Array<Person>;
  tv: Array<TVShow>;
};

export type FullExternalIDS = IExternalIDS & {
  __typename?: 'FullExternalIDS';
  facebook?: Maybe<Scalars['String']>;
  imdb?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  tmdb: Scalars['Int'];
  twitter?: Maybe<Scalars['String']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  UnknownOrNonBinary = 'UnknownOrNonBinary'
}

export type Genre = Node & {
  __typename?: 'Genre';
  discover: Discover;
  /** The id of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type GenrediscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};

export type GenreConnection = {
  __typename?: 'GenreConnection';
  edges?: Maybe<Array<Maybe<GenreEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GenreEdge = {
  __typename?: 'GenreEdge';
  cursor: Scalars['String'];
  node?: Maybe<Genre>;
};

export type Genres = {
  __typename?: 'Genres';
  all: GenreConnection;
  genre: Genre;
};


export type GenresallArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type GenresgenreArgs = {
  id: Scalars['ID'];
};

export type ICreditWithMovie = {
  id: Scalars['String'];
  value: Movie;
};

export type ICreditWithMovieOrTV = {
  id: Scalars['String'];
  value: MovieOrTV;
};

export type ICreditWithPerson = {
  id: Scalars['String'];
  value: Person;
};

export type ICreditWithTVShow = {
  id: Scalars['String'];
  value: TVShow;
};

export type ICreditsWithPerson = {
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  id: Scalars['Int'];
};

export type IExternalIDS = {
  facebook?: Maybe<Scalars['String']>;
  imdb?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type IStreamable = {
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
};


export type IStreamablesearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type IStreamablestreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type Keyword = Node & {
  __typename?: 'Keyword';
  discover: Discover;
  /** The id of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type KeyworddiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};

export enum LogoSize {
  Original = 'Original',
  W45 = 'W45',
  W92 = 'W92',
  W154 = 'W154',
  W185 = 'W185',
  W300 = 'W300',
  W500 = 'W500'
}

export type LogoSizeDetailImage = {
  __typename?: 'LogoSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type LogoSizeDetailImageimageArgs = {
  size: LogoSize;
};

export type MediaImages = {
  __typename?: 'MediaImages';
  backdrops: Array<BackdropSizeDetailImage>;
  posters: Array<PosterSizeDetailImage>;
};

export type Movie = IStreamable & Node & {
  __typename?: 'Movie';
  alternativeTitles: Array<AlternativeTitle>;
  backdrop?: Maybe<Scalars['URL']>;
  budget?: Maybe<Scalars['Int']>;
  credits: ICreditsWithPerson;
  externalIds: FullExternalIDS;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']>;
  /** The id of the object */
  id: Scalars['ID'];
  images: MediaImages;
  imdbID?: Maybe<Scalars['String']>;
  isAdult: Scalars['Boolean'];
  isVideo: Scalars['Boolean'];
  keywords: Array<Keyword>;
  numberOfRatings: Scalars['Int'];
  originalLanguage: Scalars['String'];
  originalTitle: Scalars['String'];
  overview: Scalars['String'];
  popularityIndex?: Maybe<Scalars['Float']>;
  poster?: Maybe<Scalars['URL']>;
  productionCompanies: Array<ProductionCompany>;
  productionCountries: Array<ProductionCountry>;
  rating: Scalars['Float'];
  recommendations: MovieConnection;
  releaseDate?: Maybe<Scalars['Date']>;
  revenue?: Maybe<Scalars['Int']>;
  reviews: ReviewConnection;
  runtime: Scalars['Int'];
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  similar: MovieConnection;
  spokenLanguages: Array<SpokenLanguage>;
  status: Status;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  translations: Array<TranslationWithTranslatedMovieInfo>;
  videos: Array<Video>;
};


export type MoviebackdropArgs = {
  size: BackdropSize;
};


export type MovieposterArgs = {
  size: PosterSize;
};


export type MovierecommendationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviereviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviesearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type MoviesimilarArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviestreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  edges?: Maybe<Array<Maybe<MovieEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieDiscoverInput = {
  includeAdult?: InputMaybe<Scalars['Boolean']>;
  includeVideo?: InputMaybe<Scalars['Boolean']>;
  releaseDate?: InputMaybe<DiscoverDateFilter>;
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String'];
  node?: Maybe<Movie>;
};

export type MovieOrTV = Movie | TVShow;

export type MovieOrTVOrPeople = Movie | Person | TVShow;

export type MovieOrTVOrPeopleConnection = {
  __typename?: 'MovieOrTVOrPeopleConnection';
  edges?: Maybe<Array<Maybe<MovieOrTVOrPeopleEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MovieOrTVOrPeopleEdge = {
  __typename?: 'MovieOrTVOrPeopleEdge';
  cursor: Scalars['String'];
  node?: Maybe<MovieOrTVOrPeople>;
};

export type Movies = {
  __typename?: 'Movies';
  movie: Movie;
  nowPlaying: MovieConnection;
  popular: MovieConnection;
  productionCompany: ProductionCompany;
  search: MovieConnection;
  topRated: MovieConnection;
  trending: MovieConnection;
  upcoming: MovieConnection;
};


export type MoviesmovieArgs = {
  id: Scalars['ID'];
};


export type MoviesnowPlayingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviespopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviesproductionCompanyArgs = {
  id: Scalars['ID'];
};


export type MoviessearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type MoviestopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type MoviestrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};


export type MoviesupcomingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Network = Node & {
  __typename?: 'Network';
  /** The id of the object */
  id: Scalars['ID'];
  logo?: Maybe<Scalars['URL']>;
  name: Scalars['String'];
  originCountry: Scalars['String'];
  tv: DiscoverTV;
};


export type NetworklogoArgs = {
  size: LogoSize;
};


export type NetworktvArgs = {
  input?: InputMaybe<TVDiscoverInput>;
  otherFilters?: InputMaybe<DiscoverInput>;
};

export type Node = {
  /** The id of the object */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type People = {
  __typename?: 'People';
  person: Person;
  popular: PersonConnection;
  search: PersonConnection;
  trending: PersonConnection;
};


export type PeoplepersonArgs = {
  id: Scalars['ID'];
};


export type PeoplepopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type PeoplesearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type PeopletrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};

export type Person = Node & {
  __typename?: 'Person';
  alsoKnownAs: Array<Scalars['String']>;
  biography: Scalars['String'];
  birthday?: Maybe<Scalars['Date']>;
  credits: PersonCredits;
  deathday?: Maybe<Scalars['Date']>;
  discover: Discover;
  externalIds: FullExternalIDS;
  gender: Gender;
  homepage?: Maybe<Scalars['URL']>;
  /** The id of the object */
  id: Scalars['ID'];
  images: Array<ProfileSizeDetailImage>;
  imdbID?: Maybe<Scalars['String']>;
  isAdult: Scalars['Boolean'];
  knownFor: Array<MovieOrTV>;
  knownForDepartment: Scalars['String'];
  name: Scalars['String'];
  placeOfBirth?: Maybe<Scalars['String']>;
  popularityIndex: Scalars['Float'];
  profilePicture?: Maybe<Scalars['URL']>;
  taggedImages: TaggedImageConnection;
  translations: Array<TranslationWithTranslatedPersonInfo>;
};


export type PersondiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type PersonprofilePictureArgs = {
  size: ProfileSize;
};


export type PersontaggedImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type PersonConnection = {
  __typename?: 'PersonConnection';
  edges?: Maybe<Array<Maybe<PersonEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonCredits = {
  __typename?: 'PersonCredits';
  all: CreditsWithMovieOrTV;
  movies: CreditsWithMovie;
  tv: CreditsWithTVShow;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String'];
  node?: Maybe<Person>;
};

export enum PosterSize {
  Original = 'Original',
  W92 = 'W92',
  W154 = 'W154',
  W185 = 'W185',
  W342 = 'W342',
  W500 = 'W500',
  W780 = 'W780'
}

export type PosterSizeDetailImage = {
  __typename?: 'PosterSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type PosterSizeDetailImageimageArgs = {
  size: PosterSize;
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float'];
  currency: Scalars['String'];
};

export type ProductionCompany = Node & {
  __typename?: 'ProductionCompany';
  discover: Discover;
  /** The id of the object */
  id: Scalars['ID'];
  logo?: Maybe<Scalars['URL']>;
  name: Scalars['String'];
  originCountry: Scalars['String'];
};


export type ProductionCompanydiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type ProductionCompanylogoArgs = {
  size: LogoSize;
};

export type ProductionCountry = {
  __typename?: 'ProductionCountry';
  iso3166_1: Scalars['String'];
  name: Scalars['String'];
};

export enum ProfileSize {
  H632 = 'H632',
  Original = 'Original',
  W45 = 'W45',
  W185 = 'W185'
}

export type ProfileSizeDetailImage = {
  __typename?: 'ProfileSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type ProfileSizeDetailImageimageArgs = {
  size: ProfileSize;
};

export type Query = {
  __typename?: 'Query';
  discover: Discover;
  find: FromExternalIds;
  genres: Genres;
  movies: Movies;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  people: People;
  search: MovieOrTVOrPeopleConnection;
  streaming: Streaming;
  trending: MovieOrTVOrPeopleConnection;
  tv: TV;
};


export type QuerydiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type QueryfindArgs = {
  externalId: Scalars['String'];
  source: ExternalSource;
};


export type QuerynodeArgs = {
  id: Scalars['ID'];
};


export type QuerysearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type QuerytrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['String'];
  url: Scalars['String'];
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  cursor: Scalars['String'];
  node?: Maybe<Review>;
};

export type Season = IStreamable & Node & {
  __typename?: 'Season';
  airDate?: Maybe<Scalars['Date']>;
  credits: ICreditsWithPerson;
  episode: Episode;
  episodeCount: Scalars['Int'];
  episodes: Array<Episode>;
  externalIds: IExternalIDS;
  /** The id of the object */
  id: Scalars['ID'];
  images: MediaImages;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['URL']>;
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  seasonNumber: Scalars['Int'];
  show: TVShow;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  videos: Array<Video>;
};


export type SeasonepisodeArgs = {
  number: Scalars['Int'];
};


export type SeasonposterArgs = {
  size: PosterSize;
};


export type SeasonsearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type SeasonstreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type SpokenLanguage = {
  __typename?: 'SpokenLanguage';
  iso639_1: Scalars['String'];
  name: Scalars['String'];
};

export enum Status {
  Cancelled = 'Cancelled',
  InProduction = 'InProduction',
  Planned = 'Planned',
  PostProduction = 'PostProduction',
  Released = 'Released',
  Rumored = 'Rumored'
}

export enum StillSize {
  Original = 'Original',
  W92 = 'W92',
  W185 = 'W185',
  W300 = 'W300'
}

export type StillSizeDetailImage = {
  __typename?: 'StillSizeDetailImage';
  aspectRatio: Scalars['Float'];
  height: Scalars['Int'];
  image: Scalars['URL'];
  iso639_1?: Maybe<Scalars['String']>;
  voteAverage: Scalars['Float'];
  voteCount: Scalars['Int'];
  width: Scalars['Int'];
};


export type StillSizeDetailImageimageArgs = {
  size: StillSize;
};

export type Streamable = IStreamable & {
  __typename?: 'Streamable';
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
};


export type StreamablesearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type StreamablestreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type Streaming = {
  __typename?: 'Streaming';
  allProviders: Array<StreamingProvider>;
  countries: Array<StreamingCountry>;
  myCountry?: Maybe<StreamingCountry>;
  providers: Array<StreamingProvider>;
};


export type StreamingprovidersArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type StreamingCountry = Node & {
  __typename?: 'StreamingCountry';
  emoji: Scalars['String'];
  /** The id of the object */
  id: Scalars['ID'];
  iso3166_2: Scalars['String'];
  name: Scalars['String'];
};

export type StreamingCountryOption = {
  __typename?: 'StreamingCountryOption';
  country: StreamingCountry;
  option: StreamingOption;
};

export type StreamingLinks = {
  __typename?: 'StreamingLinks';
  androidTV?: Maybe<Scalars['URL']>;
  fireTV?: Maybe<Scalars['URL']>;
  tvOS?: Maybe<Scalars['URL']>;
  web?: Maybe<Scalars['URL']>;
};

export enum StreamingMonetizationType {
  Ads = 'Ads',
  Buy = 'Buy',
  Cinema = 'Cinema',
  Flatrate = 'Flatrate',
  Free = 'Free',
  Rent = 'Rent'
}

export type StreamingOption = {
  __typename?: 'StreamingOption';
  bestOffering: StreamingOptionOffering;
  offerings: Array<StreamingOptionOffering>;
  provider?: Maybe<StreamingProvider>;
};


export type StreamingOptionproviderArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type StreamingOptionOffering = {
  __typename?: 'StreamingOptionOffering';
  links: StreamingLinks;
  price?: Maybe<Price>;
  resolution: VideoResolution;
  type: StreamingMonetizationType;
};

export type StreamingOptions = {
  country?: InputMaybe<Scalars['ID']>;
  monetizationTypes?: InputMaybe<Array<StreamingMonetizationType>>;
  streamingProviders: Array<Scalars['ID']>;
};

export type StreamingProvider = Node & {
  __typename?: 'StreamingProvider';
  iconURL: Scalars['URL'];
  /** The id of the object */
  id: Scalars['ID'];
  monetizationTypes: Array<StreamingMonetizationType>;
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type StreamingResultForProvideer = {
  __typename?: 'StreamingResultForProvideer';
  bestOption: StreamingCountryOption;
  options: Array<StreamingCountryOption>;
  provider?: Maybe<StreamingProvider>;
};


export type StreamingResultForProvideerproviderArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type TV = {
  __typename?: 'TV';
  airingToday: TVShowConnection;
  episode: Episode;
  network: Network;
  onTheAir: TVShowConnection;
  popular: TVShowConnection;
  search: TVShowConnection;
  season: Season;
  show: TVShow;
  topRated: TVShowConnection;
  trending: TVShowConnection;
  upcoming: TVShowConnection;
};


export type TVairingTodayArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TVepisodeArgs = {
  id: Scalars['ID'];
};


export type TVnetworkArgs = {
  id: Scalars['ID'];
};


export type TVonTheAirArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TVpopularArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TVsearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type TVseasonArgs = {
  id: Scalars['ID'];
};


export type TVshowArgs = {
  id: Scalars['ID'];
};


export type TVtopRatedArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TVtrendingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  timeWindow?: TimeWindow;
};


export type TVupcomingArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TVDiscoverInput = {
  airDate?: InputMaybe<DiscoverDateFilter>;
  firstAirDate?: InputMaybe<DiscoverDateFilter>;
  networks?: InputMaybe<DiscoverIncludeFilter>;
};

export type TVShow = IStreamable & Node & {
  __typename?: 'TVShow';
  alternativeTitles: Array<AlternativeTitle>;
  backdrop?: Maybe<Scalars['URL']>;
  createdBy: Array<ICreditWithPerson>;
  credits: ICreditsWithPerson;
  episodeRunTime: Array<Scalars['Int']>;
  episodes: Array<Episode>;
  externalIds: FullExternalIDS;
  firstAirDate?: Maybe<Scalars['Date']>;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']>;
  /** The id of the object */
  id: Scalars['ID'];
  images: MediaImages;
  inProduction: Scalars['Boolean'];
  keywords: Array<Keyword>;
  languages: Array<Scalars['String']>;
  lastAirDate?: Maybe<Scalars['Date']>;
  lastEpisodeToAir?: Maybe<Episode>;
  name: Scalars['String'];
  networks: Array<Network>;
  nextEpisodeToAir?: Maybe<Episode>;
  numberOfEpisodes: Scalars['Int'];
  numberOfRatings: Scalars['Int'];
  numberOfSeasons: Scalars['Int'];
  originCountry: Array<Scalars['String']>;
  originalLanguage: Scalars['String'];
  originalName: Scalars['String'];
  overview: Scalars['String'];
  popularityIndex?: Maybe<Scalars['Float']>;
  poster?: Maybe<Scalars['URL']>;
  productionCompanies: Array<Network>;
  rating: Scalars['Float'];
  recommendations: TVShowConnection;
  reviews: ReviewConnection;
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  season: Season;
  seasons: Array<Season>;
  similar: TVShowConnection;
  status: Scalars['String'];
  streamingOptions?: Maybe<Array<StreamingOption>>;
  topRatedEpisode?: Maybe<Episode>;
  translations: Array<TranslationWithTranslatedMovieInfo>;
  type: Scalars['String'];
  videos: Array<Video>;
};


export type TVShowbackdropArgs = {
  size: BackdropSize;
};


export type TVShowposterArgs = {
  size: PosterSize;
};


export type TVShowrecommendationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TVShowreviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TVShowsearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']>>;
  providers: Array<Scalars['ID']>;
};


export type TVShowseasonArgs = {
  number: Scalars['Int'];
};


export type TVShowsimilarArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type TVShowstreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']>;
};

export type TVShowConnection = {
  __typename?: 'TVShowConnection';
  edges?: Maybe<Array<Maybe<TVShowEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TVShowEdge = {
  __typename?: 'TVShowEdge';
  cursor: Scalars['String'];
  node?: Maybe<TVShow>;
};

export type TaggedImage = {
  __typename?: 'TaggedImage';
  image: AnyImage;
  media: MovieOrTV;
};

export type TaggedImageConnection = {
  __typename?: 'TaggedImageConnection';
  edges?: Maybe<Array<Maybe<TaggedImageEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TaggedImageEdge = {
  __typename?: 'TaggedImageEdge';
  cursor: Scalars['String'];
  node?: Maybe<TaggedImage>;
};

export enum TimeWindow {
  Day = 'Day',
  Week = 'Week'
}

export type TranslatedMovieInfo = {
  __typename?: 'TranslatedMovieInfo';
  overview: Scalars['String'];
  title: Scalars['String'];
};

export type TranslatedPersonInfo = {
  __typename?: 'TranslatedPersonInfo';
  biography: Scalars['String'];
};

export type TranslationWithTranslatedMovieInfo = {
  __typename?: 'TranslationWithTranslatedMovieInfo';
  info: TranslatedMovieInfo;
  iso639_1: Scalars['String'];
  iso3166_1: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  localizedLanguage?: Maybe<Scalars['String']>;
};

export type TranslationWithTranslatedPersonInfo = {
  __typename?: 'TranslationWithTranslatedPersonInfo';
  info: TranslatedPersonInfo;
  iso639_1: Scalars['String'];
  iso3166_1: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  localizedLanguage?: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  iso639_1: Scalars['String'];
  iso3166_1: Scalars['String'];
  key: Scalars['String'];
  links?: Maybe<StreamingLinks>;
  name: Scalars['String'];
  site: Scalars['String'];
  size: Scalars['Int'];
  thumbnail?: Maybe<Scalars['URL']>;
  type: Scalars['String'];
};

export enum VideoResolution {
  Bluray = 'Bluray',
  Dvd = 'Dvd',
  Hd = 'Hd',
  Sd = 'Sd',
  Theatre = 'Theatre',
  UltraHd = 'UltraHd'
}

export type CastMinFragment = { __typename?: 'CastCreditWithPerson', id: string, character: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } };

export type CrewMinFragment = { __typename?: 'CrewCreditWithPerson', department: string, job: string, id: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } };

export type MovieFragment = { __typename?: 'Movie', id: string, title: string, overview: string, tagline: string, releaseDate?: any | null, rating: number, imdbID?: string | null, posterLarge?: any | null, backdropLarge?: any | null, credits: { __typename?: 'CreditsWithPerson', cast: Array<{ __typename?: 'CastCreditWithPerson', id: string, character: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }>, crew: Array<{ __typename?: 'CrewCreditWithPerson', department: string, job: string, id: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }> } | { __typename?: 'EpisodeCreditsWithPerson', cast: Array<{ __typename?: 'CastCreditWithPerson', id: string, character: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }>, crew: Array<{ __typename?: 'CrewCreditWithPerson', department: string, job: string, id: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }> }, genres: Array<{ __typename?: 'Genre', id: string, name: string }> };

export type MovieConnectionInfoFragment = { __typename?: 'MovieConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } };

export type MovieConnectionMinFragment = { __typename?: 'MovieConnection', totalCount: number, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, releaseDate?: any | null, rating: number, posterMedium?: any | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } };

export type MovieMinFragment = { __typename?: 'Movie', id: string, title: string, overview: string, releaseDate?: any | null, rating: number, posterMedium?: any | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> };

export type FetchPopularMoviesQueryVariables = Exact<{
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type FetchPopularMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', popular: { __typename?: 'MovieConnection', totalCount: number, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, releaseDate?: any | null, rating: number, posterMedium?: any | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } } };

export type FetchUpcomingMoviesQueryVariables = Exact<{
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type FetchUpcomingMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', upcoming: { __typename?: 'MovieConnection', totalCount: number, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, releaseDate?: any | null, rating: number, posterMedium?: any | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } } };

export type GetMovieQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMovieQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', movie: { __typename?: 'Movie', id: string, title: string, overview: string, tagline: string, releaseDate?: any | null, rating: number, imdbID?: string | null, posterLarge?: any | null, backdropLarge?: any | null, credits: { __typename?: 'CreditsWithPerson', cast: Array<{ __typename?: 'CastCreditWithPerson', id: string, character: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }>, crew: Array<{ __typename?: 'CrewCreditWithPerson', department: string, job: string, id: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }> } | { __typename?: 'EpisodeCreditsWithPerson', cast: Array<{ __typename?: 'CastCreditWithPerson', id: string, character: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }>, crew: Array<{ __typename?: 'CrewCreditWithPerson', department: string, job: string, id: string, value: { __typename?: 'Person', id: string, name: string, profilePicture?: any | null } }> }, genres: Array<{ __typename?: 'Genre', id: string, name: string }> } } };

export type GetRecommendedMoviesQueryVariables = Exact<{
  id: Scalars['ID'];
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type GetRecommendedMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', movie: { __typename?: 'Movie', id: string, title: string, recommendations: { __typename?: 'MovieConnection', totalCount: number, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, releaseDate?: any | null, rating: number, posterMedium?: any | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } } } };

export type GetSimilarMoviesQueryVariables = Exact<{
  id: Scalars['ID'];
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type GetSimilarMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', movie: { __typename?: 'Movie', id: string, title: string, similar: { __typename?: 'MovieConnection', totalCount: number, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, releaseDate?: any | null, rating: number, posterMedium?: any | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } } } };

export type SearchMoviesQueryVariables = Exact<{
  term: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type SearchMoviesQuery = { __typename?: 'Query', movies: { __typename?: 'Movies', search: { __typename?: 'MovieConnection', totalCount: number, edges?: Array<{ __typename?: 'MovieEdge', node?: { __typename?: 'Movie', id: string, title: string, overview: string, releaseDate?: any | null, rating: number, posterMedium?: any | null, genres: Array<{ __typename?: 'Genre', id: string, name: string }> } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } } } };

export const CastMinFragmentDoc = gql`
    fragment CastMin on CastCreditWithPerson {
  id
  character
  value {
    id
    name
    profilePicture: profilePicture(size: W185)
  }
}
    `;
export const CrewMinFragmentDoc = gql`
    fragment CrewMin on CrewCreditWithPerson {
  department
  job
  id
  value {
    id
    name
    profilePicture: profilePicture(size: W185)
  }
}
    `;
export const MovieFragmentDoc = gql`
    fragment Movie on Movie {
  id
  title
  overview
  tagline
  releaseDate
  rating
  imdbID
  posterLarge: poster(size: W500)
  backdropLarge: backdrop(size: W1280)
  credits {
    cast {
      ...CastMin
    }
    crew {
      ...CrewMin
    }
  }
  genres {
    id
    name
  }
}
    ${CastMinFragmentDoc}
${CrewMinFragmentDoc}`;
export const MovieConnectionInfoFragmentDoc = gql`
    fragment MovieConnectionInfo on MovieConnection {
  totalCount
  pageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  }
}
    `;
export const MovieMinFragmentDoc = gql`
    fragment MovieMin on Movie {
  id
  title
  overview
  releaseDate
  rating
  genres {
    id
    name
  }
  posterMedium: poster(size: W342)
}
    `;
export const MovieConnectionMinFragmentDoc = gql`
    fragment MovieConnectionMin on MovieConnection {
  ...MovieConnectionInfo
  edges {
    node {
      ... on Movie {
        ...MovieMin
      }
    }
  }
}
    ${MovieConnectionInfoFragmentDoc}
${MovieMinFragmentDoc}`;
export const FetchPopularMoviesDocument = gql`
    query FetchPopularMovies($last: Int, $after: String, $first: Int, $before: String) {
  movies {
    popular(last: $last, after: $after, first: $first, before: $before) {
      ...MovieConnectionInfo
      edges {
        node {
          ... on Movie {
            ...MovieMin
          }
        }
      }
    }
  }
}
    ${MovieConnectionInfoFragmentDoc}
${MovieMinFragmentDoc}`;

/**
 * __useFetchPopularMoviesQuery__
 *
 * To run a query within a React component, call `useFetchPopularMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPopularMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPopularMoviesQuery({
 *   variables: {
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useFetchPopularMoviesQuery(baseOptions?: Apollo.QueryHookOptions<FetchPopularMoviesQuery, FetchPopularMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPopularMoviesQuery, FetchPopularMoviesQueryVariables>(FetchPopularMoviesDocument, options);
      }
export function useFetchPopularMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPopularMoviesQuery, FetchPopularMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPopularMoviesQuery, FetchPopularMoviesQueryVariables>(FetchPopularMoviesDocument, options);
        }
export type FetchPopularMoviesQueryHookResult = ReturnType<typeof useFetchPopularMoviesQuery>;
export type FetchPopularMoviesLazyQueryHookResult = ReturnType<typeof useFetchPopularMoviesLazyQuery>;
export type FetchPopularMoviesQueryResult = Apollo.QueryResult<FetchPopularMoviesQuery, FetchPopularMoviesQueryVariables>;
export const FetchUpcomingMoviesDocument = gql`
    query FetchUpcomingMovies($last: Int, $after: String, $first: Int, $before: String) {
  movies {
    upcoming(last: $last, after: $after, first: $first, before: $before) {
      ...MovieConnectionInfo
      edges {
        node {
          ... on Movie {
            ...MovieMin
          }
        }
      }
    }
  }
}
    ${MovieConnectionInfoFragmentDoc}
${MovieMinFragmentDoc}`;

/**
 * __useFetchUpcomingMoviesQuery__
 *
 * To run a query within a React component, call `useFetchUpcomingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUpcomingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUpcomingMoviesQuery({
 *   variables: {
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useFetchUpcomingMoviesQuery(baseOptions?: Apollo.QueryHookOptions<FetchUpcomingMoviesQuery, FetchUpcomingMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUpcomingMoviesQuery, FetchUpcomingMoviesQueryVariables>(FetchUpcomingMoviesDocument, options);
      }
export function useFetchUpcomingMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUpcomingMoviesQuery, FetchUpcomingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUpcomingMoviesQuery, FetchUpcomingMoviesQueryVariables>(FetchUpcomingMoviesDocument, options);
        }
export type FetchUpcomingMoviesQueryHookResult = ReturnType<typeof useFetchUpcomingMoviesQuery>;
export type FetchUpcomingMoviesLazyQueryHookResult = ReturnType<typeof useFetchUpcomingMoviesLazyQuery>;
export type FetchUpcomingMoviesQueryResult = Apollo.QueryResult<FetchUpcomingMoviesQuery, FetchUpcomingMoviesQueryVariables>;
export const GetMovieDocument = gql`
    query GetMovie($id: ID!) {
  movies {
    movie(id: $id) {
      ...Movie
    }
  }
}
    ${MovieFragmentDoc}`;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const GetRecommendedMoviesDocument = gql`
    query GetRecommendedMovies($id: ID!, $last: Int, $after: String, $first: Int, $before: String) {
  movies {
    movie(id: $id) {
      id
      title
      recommendations(last: $last, after: $after, first: $first, before: $before) @connection(key: $id) {
        ...MovieConnectionMin
      }
    }
  }
}
    ${MovieConnectionMinFragmentDoc}`;

/**
 * __useGetRecommendedMoviesQuery__
 *
 * To run a query within a React component, call `useGetRecommendedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecommendedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecommendedMoviesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useGetRecommendedMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetRecommendedMoviesQuery, GetRecommendedMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecommendedMoviesQuery, GetRecommendedMoviesQueryVariables>(GetRecommendedMoviesDocument, options);
      }
export function useGetRecommendedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecommendedMoviesQuery, GetRecommendedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecommendedMoviesQuery, GetRecommendedMoviesQueryVariables>(GetRecommendedMoviesDocument, options);
        }
export type GetRecommendedMoviesQueryHookResult = ReturnType<typeof useGetRecommendedMoviesQuery>;
export type GetRecommendedMoviesLazyQueryHookResult = ReturnType<typeof useGetRecommendedMoviesLazyQuery>;
export type GetRecommendedMoviesQueryResult = Apollo.QueryResult<GetRecommendedMoviesQuery, GetRecommendedMoviesQueryVariables>;
export const GetSimilarMoviesDocument = gql`
    query GetSimilarMovies($id: ID!, $last: Int, $after: String, $first: Int, $before: String) {
  movies {
    movie(id: $id) {
      id
      title
      similar(last: $last, after: $after, first: $first, before: $before) @connection(key: $id) {
        ...MovieConnectionMin
      }
    }
  }
}
    ${MovieConnectionMinFragmentDoc}`;

/**
 * __useGetSimilarMoviesQuery__
 *
 * To run a query within a React component, call `useGetSimilarMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimilarMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimilarMoviesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useGetSimilarMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, options);
      }
export function useGetSimilarMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, options);
        }
export type GetSimilarMoviesQueryHookResult = ReturnType<typeof useGetSimilarMoviesQuery>;
export type GetSimilarMoviesLazyQueryHookResult = ReturnType<typeof useGetSimilarMoviesLazyQuery>;
export type GetSimilarMoviesQueryResult = Apollo.QueryResult<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>;
export const SearchMoviesDocument = gql`
    query SearchMovies($term: String!, $last: Int, $after: String, $first: Int, $before: String) {
  movies {
    search(term: $term, last: $last, after: $after, first: $first, before: $before) {
      ...MovieConnectionInfo
      edges {
        node {
          ... on Movie {
            ...MovieMin
          }
        }
      }
    }
  }
}
    ${MovieConnectionInfoFragmentDoc}
${MovieMinFragmentDoc}`;

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
 *      term: // value for 'term'
 *      last: // value for 'last'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *      before: // value for 'before'
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