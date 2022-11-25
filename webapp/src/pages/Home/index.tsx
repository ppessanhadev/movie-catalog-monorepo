import { Header } from '@components/Header';
import { Loading } from '@components/Loading/styles';
import { MovieCard } from '@components/MovieCard';
import { Pagination } from '@components/Pagination';
import { data } from '@utils/mocks/movies';
import * as S from './styles';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        {data.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
        <Pagination pages={3} actualPage={1} />
      </S.Container>
    </>
  );
};
