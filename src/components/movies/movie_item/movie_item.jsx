import React from 'react';
import './movie_item.css';

export const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const MovieItem = ({ movie, onMovieClick }) => {
  const {title, poster_path, vote_average, release_date} = movie;
  
  return (
    <div className="movie_item" onClick={()=> onMovieClick(movie)}>
        <img src={poster_path ?  (`${IMG_API}${poster_path}`) : 'https://s3.amazonaws.com/www-inside-design/uploads/2018/07/netflix-feature.jpg' } alt={title} />
        <div className="movie_info">
          <div className="title">{title}</div>
          <div className="movie_details">
            <div className="rating">
              Rating:  <span>{vote_average}</span></div>
            <div className='release'>
              Release:  <span>{release_date.substring(0,4)}</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MovieItem;
