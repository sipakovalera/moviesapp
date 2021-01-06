import React from 'react';
import './trailer.css';

const TrailerMovies = () => {

  const onTrailerClick = () => {
    console.log('click')
  }

  return(
    <div>
      <button 
        type="button" 
        name="trailer"
        onClick={onTrailerClick}>
          <span>Trailer</span>
          <i class="fas fa-eye fa-2x"></i>
      </button>
    </div>
  )
}

export default TrailerMovies;
