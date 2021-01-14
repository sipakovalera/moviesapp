import React from 'react';
import '../../modal/modal.css';
import MovieItem from '../../movies/movie_item/movie_item';

const FavouriteItem = ({ movie }) => {
  return(
    <div>
        <MovieItem movie={movie} />
    </div>
  )
}

export default FavouriteItem;
