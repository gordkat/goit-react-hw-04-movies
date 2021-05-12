import Axios from 'axios';
const KEY = 'e60f83e827aba533dbbc9432f8edf966';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await Axios.get(
    `${BASE_URL}trending/movie/week?api_key=${KEY}`,
  );
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await Axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}`,
  );
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await Axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`,
  );
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const response = await Axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`,
  );
  return response.data;
};

export const fetchSearchMovies = async query => {
  const response = await Axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`,
  );
  return response.data.results;
};
