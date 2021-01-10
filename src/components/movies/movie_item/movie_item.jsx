import React from 'react';
import './movie_item.css';

export const IMG_API = `https://image.tmdb.org/t/p/w1280`;
export const defaultPoster = 'https://i.dlpng.com/static/png/6387956_preview.png';

const MovieItem = ({ movie, onMovieClick }) => {
  const {title, poster_path, vote_average, release_date } = movie;

  return (
    <div className="movie_item" onClick={() => onMovieClick(movie)}>
      <div className="poster_path">
        <img src={poster_path ?  ( `${IMG_API}${poster_path}`) : defaultPoster } alt={title} />
      </div>
        <div className="movie_info">
          <div className="title">{title}</div>
          <div className="movie_details">
            <div className="rating">
              Rating:  <span>{vote_average}</span>
            </div>
            <div className='release'>
              Release:  <span>{release_date ? release_date.substring(0,4) : 'No date'}</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MovieItem;
