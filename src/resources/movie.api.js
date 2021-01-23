import { get } from './api';

export const fetchMovies = (currentPage) => {
  return get('/discover/movie', { params: { page: currentPage } });
};

export const searchMovies = (query) => {
  return get('/search/movie', { params: { query } });
};

export const popularMovies = () => {
  return get('/movie/top_rated', { params: {page: 1}  });
}; 

export const trailerMovies = (movies) => {
  return get(`/movie/${movies}/videos`, {params: {}});
}; 

export const detailsMovies = (movie_id) => {
  return get(`/movie/${movie_id}`, {params: {}});
}; 
