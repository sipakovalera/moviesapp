import React from 'react';
import '../trailer_movies/trailer.css';

const TrailerItem = ({keyObj, name}) =>{
  const urlTrailer = `https://www.youtube.com/watch?v=${keyObj}`;
  return (
    <div className="trailer">
      <button 
        type="button" 
        name="trailer">
        <a href={urlTrailer} rel="noreferrer" target="_blank"><span>{name}</span></a>
          <i className="fas fa-eye"></i>
      </button>
    </div>  
  )
}

export default TrailerItem;
