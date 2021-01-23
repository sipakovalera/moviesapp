import React, { useState, useEffect } from 'react';
import { detailsMovies } from '../../resources/movie.api';
import './details.css';
import DetailItem from './detail_item';

const Details = ({ checkDetails }) => {
  
  const [detail, setDetail] = useState(''); 
debugger;
  useEffect(() => {
    const init = async() => {
      const data = await detailsMovies(checkDetails);
      const { results } = data;
      setDetail(results);
      console.log(results);
    }

      init()
  }, [checkDetails]);


  return (
    <div className="details_container">
      {detail.length > 0 && detail.map((item) => (
        <DetailItem
          detail={item.key}
        />
      ))}
   </div>  
  )    
}

export default Details;
