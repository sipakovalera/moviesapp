import { get } from './api';

export const fetchMovies = (currentPage) => {
  return get('/discover/movie', { params: { page: currentPage } });
};

export const searchMovies = (query) => {
  return get('/search/movie', { params: { query } });
};

export const detailsMovies = (movie_id) => {
  return get('/movie', { params: { movie_id }  });
}; 
