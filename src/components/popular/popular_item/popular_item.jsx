import React from 'react';
import './popular_item.css';
import { IMG_API } from '../../../const/constant';

const PopularItem = ({ popular }) => {
  const {poster_path, title, vote_average, overview} = popular;

  return (
    <div className="slider_popular">
      <div className="slider_poster">
        <img src={`${IMG_API}${poster_path}`} alt={title} />
      </div>
      <div className="popular_captain">
        <div className="title_popular">{title}</div> 
        <div className="rating_popular">{vote_average}</div>
      </div>  
      <div className="overview_popular">
        <p>Overview:</p>
        <span>{overview}</span>
      </div>    
  </div>
 ) 
}

export default PopularItem;
