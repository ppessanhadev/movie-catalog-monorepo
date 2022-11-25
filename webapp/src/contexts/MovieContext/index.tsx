import { ReactNode, useCallback, useEffect, useState } from 'react';
import { MovieContext } from './context';
import * as provider from '../../providers/movie';

type Props = {
  children: ReactNode;
};

export const MovieProvider = ({ children }: Props) => {
  const [pages, setPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    provider
      .listMovies()
      .then((response) => {
        setMovies(response.movies);
        setPages(response.count);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const updateMovies = useCallback(() => {
    setLoading(true);
    provider
      .updateMovies(1)
      .then((response) => {
        setMovies(response.movies);
        setPages(response.count);
        setActualPage(1);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const newPage = useCallback((page: number) => {
    setLoading(true);
    setActualPage(page);
    provider
      .listMovies(page)
      .then((response) => {
        setMovies(response.movies);
        setPages(response.count);
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const values = {
    movies,
    pages,
    actualPage,
    loading,
    updateMovies,
    newPage,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
