import { Hello } from '@components/Hello';
import * as S from './styles';

export const Home: React.FC = () => {
  return (
    <S.Container>
      <Hello message='pessoas!' />
    </S.Container>
  );
};
