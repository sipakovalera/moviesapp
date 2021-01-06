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

export const trailerMovies = (movie_id) => {
  return get('/movie', { params: { movie_id }  });
}; 
