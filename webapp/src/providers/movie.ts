import axios from '@utils/axiosConfig';

export async function listMovies(page = 1) {
  const { data } = await axios.get('/api/v1/movies', {
    params: { page },
  });

  return data;
}

export async function updateMovies(page: number) {
  await axios.get('/api/v1/movies/update');
  const response = await listMovies(page);

  return response;
}
