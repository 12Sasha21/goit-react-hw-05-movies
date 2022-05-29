import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '2834cce01162bee50a22c300f1f38e88';

export async function fetchTrends() {
  const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMovieById(movieId) {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchCastInfo(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function fetchReviewsInfo(movieId) {
  const respons = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return respons.data.results;
}

export async function fetchFilmsByQuery(query) {
  const respons = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return respons.data.results;
}
