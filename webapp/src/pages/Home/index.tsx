import { Header } from '@components/Header';
import { MovieCard } from '@components/MovieCard';
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
      </S.Container>
    </>
  );
};
