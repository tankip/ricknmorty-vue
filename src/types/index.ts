export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: [Episode];
  created: string;
};

export type Characters = {
  info: Info;
  results: [Character];
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [Character];
  created: string;
};

export type Episodes = {
  info: Info;
  results: [Episode];
};

export type FilterCharacter = {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
};

export type FilterEpisode = {
  name: string;
  episode: string;
};

export type FilterLocation = {
  name: string;
  type: string;
  dimension: string;
};

export type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [Character];
  created: string;
};

export type Locations = {
  info: Info;
  results: [Location];
};

export type LocationsResults = {
  locations: Locations;
};

export type LocationResult = {
  location: Location
}

export type CharactersResults = {
  characters: Characters;
};

export type CharacterResult = {
  character: Character
}

export type CountResult = {
  characters: Info;
  episodes: Info;
  locations: Info;
}
