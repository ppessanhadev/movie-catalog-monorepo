import * as S from './styles';

interface MovieCardProps {
  title?: string;
  banner: string;
  director: string;
  producer: string;
  description: string;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  return (
    <S.Card className="movie-card" url={props.banner}>
      <S.Info>
        <h2>{props.title}</h2>
        <h4>Director: {props.director}</h4>
        <h4>Producer: {props.producer}</h4>
        <p>{props.description}</p>
      </S.Info>
    </S.Card>
  );
};
