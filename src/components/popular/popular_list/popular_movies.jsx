import React, { useState, useEffect } from 'react';
import './popular_movies.css';
import PopularItem from '../popular_item/popular_item';
import { popularMovies } from '../../../resources/movie.api';
import Carousel from 'react-elastic-carousel';

const PopularMovies = () => {
  const [allPopular, setAllPopular] = useState([]);

  useEffect(() => {
    const init = async () => {
      const data = await popularMovies();
      const { results } = data;
      setAllPopular(results);
    };

    init();
  }, []);

  return (
    <div className="slider_container">
      <div className="title_slider">20 Top Rated Movies</div>
      <Carousel 
        autoPlaySpeed={5000}
        enableAutoPlay={true}
        pagination={true}
        itemsToShow={4}
      >
      {allPopular.map((popular) => (
        <PopularItem
          key={popular.id}
          popular={popular} />
      ))}
      </Carousel>
    </div>
  );
}

export default PopularMovies;
