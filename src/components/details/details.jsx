import React, { useEffect, useState } from 'react';
import { detailsMovies } from '../../resources/movie.api';
import Detail from './detail';
import './details.css';

const Details = ({ openDetails }) => {
  const [details, setDetails] = useState(''); 

  useEffect(() => {
    const init = async() => {
      const data = await detailsMovies(openDetails);
      const { results } = data;
      setDetails(results);
    }

      init()
  }, [openDetails]);

  return (
    <div className="details_container">
      {details.length > 0 && details.map((detail) => (
        <Detail
          key={detail.id}
          detail={detail}
        />
      ))}
   </div>  
  )    
}

export default Details;
