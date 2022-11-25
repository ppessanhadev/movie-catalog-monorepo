import { createContext } from 'react';

export const MovieContext = createContext({});

export type TMovieContext = {
  movies: any[];
  pages: number;
  actualPage: number;
  loading: boolean;
  updateMovies: () => void;
  newPage: (page: number) => void;
};
