import React, {useEffect, useState } from 'react';
import { detailsMovies } from '../../resources/movie.api';
import Detail from './detail_item/detail';

const Details = ({match}) => {
  const hash = match.params.id;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const init = async () => {
      const data = await detailsMovies(hash);
      setDetails(data);
    };

    init();
  }, [hash]);

  return (
    <div>
      <Detail movie={details} />
    </div>
  )
}

export default Details;
