import { useContext } from 'react';
import { Header } from '@components/Header';
import { MovieCard } from '@components/MovieCard';
import { Pagination } from '@components/Pagination';
import { Loading } from '@components/Loading/styles';
import { MovieContext, TMovieContext } from '@contexts/MovieContext/context';
import * as S from './styles';

export const Home: React.FC = () => {
  const { movies, loading } = useContext(MovieContext) as TMovieContext;
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <S.Container>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
          <Pagination />
        </S.Container>
      )}
    </>
  );
};
