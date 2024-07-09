// src/types/Games

export interface Game {
  id: number;
  name: string;
  releaseDate: string;
  genres: { name: string }[];
  rating: number;
  background_image: string;
  platform: string[];
}
