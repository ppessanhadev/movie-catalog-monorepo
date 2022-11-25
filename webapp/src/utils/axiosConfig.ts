import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wa-movie-backend.herokuapp.com/',
  timeout: 35000,
});

export default instance;
