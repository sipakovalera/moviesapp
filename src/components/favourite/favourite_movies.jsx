import React, { useState } from 'react';
import './favourite.css';
import {Link } from 'react-router-dom'
import MovieItem from '../movies/movie_item/movie_item';

const FavouriteMovies = () => {
  const [favouriteMovies, setFavouriteMovis ] = useState([]);

  return(
    <div className="favourite_movies">
      <div className="banner_favourite">
        <div className="favourite_title">
        <div className="arrow-return">
          <Link to="/">
            <i className="fas fa-chevron-circle-left"></i>
          </Link>
        </div>
        <span>Favourite movies</span>
        <div className="favourite_list">
          {favouriteMovies.map((movie)=> (
            <MovieItem
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}


export default FavouriteMovies; 
