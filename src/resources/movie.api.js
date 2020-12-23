import { get } from './api';

export const fetchMovies = (currentPage) => {
  return get('/discover/movie', { params: { page: currentPage } });
};

export const searchMovies = (search) => {
  return get('/search/movie', { params: { search } });
};

export const genreMovies = (id) => {
  return get('/genre/movie/list', {params: { id } });
}


