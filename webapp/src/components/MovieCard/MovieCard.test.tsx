import { MovieCard } from '.';
import { data } from '@utils/mocks/movies';
import { render, describe, it, expect, screen } from '@utils/test-essentials';
import 'jest-styled-components';

describe('<MovieCard />', () => {
  const [movie] = data;
  it('should render a card with title, director, producer, description properly', () => {
    const { container } = render(<MovieCard {...movie} />);
    const card = container.querySelector('.movie-card');
    const title = screen.queryByText(movie.title);
    const producer = screen.queryByText(movie.producer, { exact: false });
    const director = screen.queryByText(movie.director, { exact: false });
    const description = screen.queryByText(movie.description);

    expect(card).toBeInTheDocument();

    expect(title).toHaveTextContent(movie.title);
    expect(producer).toHaveTextContent(`Producer: ${movie.producer}`);
    expect(director).toHaveTextContent(`Director: ${movie.director}`);
    expect(description).toHaveTextContent(movie.description);
  });

  it('should render a banner as background image on card', () => {
    const { container } = render(<MovieCard {...movie} />);
    const card = container.querySelector('.movie-card');

    expect(card).toHaveStyleRule(
      'background',
      `url(${movie.banner}) no-repeat 0 0`,
    );
  });
});
