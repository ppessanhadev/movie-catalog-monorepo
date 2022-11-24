import { GhibliListMoviesResponse } from '@shared/types/GhibliListMovieResponse';
export class GhibliAdapter {
  protected transform(movies: GhibliListMoviesResponse[]) {
    return movies.map((movie) => {
      return {
        title: movie.title,
        banner: movie.movie_banner,
        description: movie.description,
        director: movie.director,
        producer: movie.producer,
      };
    });
  }
}
