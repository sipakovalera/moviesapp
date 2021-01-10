import React from 'react';
import './favourite.css';
import {Link } from 'react-router-dom'

const FavouriteMovies = () => {
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
        </div>
      </div>
    </div>
  )
}


export default FavouriteMovies; 
