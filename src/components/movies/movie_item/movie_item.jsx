import React from 'react';
import './movie_item.css';
import { IMG_API, defaultPoster } from '../../../const/constant';

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
