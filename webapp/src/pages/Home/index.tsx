import { Header } from '@components/Header';
import { MovieCard } from '@components/MovieCard';
import * as S from './styles';

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <MovieCard />
      </S.Container>
    </>
  );
};
