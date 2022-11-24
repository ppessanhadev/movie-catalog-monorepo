export type GhibliListMoviesResponse = {
  /**
   * Movie USA title
   *
   * Example - `title: Castle in the sky`
   */
  title: string;

  /**
   * Movie cover url image
   *
   * Example - `image: https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg`
   */
  image: string;

  /**
   * Movie banner url image
   *
   * Example - `movie_banner: https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg`
   */
  movie_banner: string;

  /**
   * Description of the movie
   *
   * Example - `description: The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.`
   */
  description: string;

  /**
   * Director's name of the movie
   *
   * Example - `director: Hayao Miyazaki`
   */
  director: string;

  /**
   * Producer's name of the movie
   *
   * Example - `producer: Hideo Kojima`
   */
  producer: string;

  /**
   * Year date release of the movie
   *
   * Example - `release_date: `
   */
  release_date: string;

  /**
   * Movie running time in minutes
   *
   * Example - `running_time: 124`
   */
  running_time: string;
};
