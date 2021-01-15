import React, { useEffect, useState } from 'react';
import { trailerMovies } from '../../../resources/movie.api';
import TrailerItem from '../trailer_item/trailer_item';
import './trailer.css';

const TrailerMovies = ({ openTrailer }) => {

 const [trailer, setTrailer] = useState(''); 

  useEffect(() => {
    const init = async() => {
      const data = await trailerMovies(openTrailer);
      const { results } = data;
      setTrailer(results);
    }

      init()
  }, [openTrailer]);

  return(
    <div className="trailers_container">
      {trailer.length > 0 && trailer.map((item) => (
        <TrailerItem
          key={item.id}
          keyObj={item.key}
          name={item.name}
        />
      ))}
    </div>
  )
}

export default TrailerMovies;
