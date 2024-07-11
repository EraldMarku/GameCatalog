// src/types/Games

export interface Game {
  [x: string]: any;
  released: any;
  id: number;
  name: string;
  releaseDate: string;
  genres: { name: string }[];
  rating: number;
  background_image: string;
  platforms: { platform: { name: string } }[];
  developers?: { name: string }[];
  publishers?: { name: string }[];
  description: string;
}
