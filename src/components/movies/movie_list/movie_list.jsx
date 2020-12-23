/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import MovieItem from '../movie_item/movie_item'; 
import ModalWindow from '../modal/modal';
import Loader from '../loader/loader';
import Pagination from './pagination/pagination';
import './pagination/pagination.css';

import { fetchMovies, searchMovies } from '../../../resources/movie.api';

const MovieList = () => {
const [ movies, setMovies ] = useState([]);
const [ search, setSearch ] = useState('');
const [ modalActive, setModalActive ] = useState(null);
const [ currentPage, setCurrentPage ] = useState(1);
const [ loading, setLoading ] = useState(false);
const [ totalPage, setTotalPage ] = useState(1);
const [totalResults, setTotalResults ] = useState(0);


useEffect(() => {
  const init = async() => {
    const data = await fetchMovies(currentPage);

      setLoading(true);
      const { total_pages, total_results} = data;
      setTotalResults(total_results);
      setTotalPage(total_pages);
      setLoading(false);
    }

    init()
  }, []);


useEffect(()=> {
  const init = async() => {
    const data = await fetchMovies(currentPage);
    const { page, results } = data;
    setMovies(results);
    setCurrentPage(page);
    }

    init()
  }, []);

  const handleOnSumbit = (e) =>{
    e.preventDefault();
    if (search) {
      searchMovies(search);
      setSearch('');
    }
  }

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  }

  const sortRate = () => {
    console.log('click rate')
  }

  const sortRelease = () => {
    console.log('click release')
  }

  const handlePageClick=({selected:selectedPage}) => {
     setCurrentPage(selectedPage);
     searchMovies(search);
     setSearch('');
    }


  return (
      <div className="container">
        <div className="banner">
          <div className="search_section">
            <form onSubmit={handleOnSumbit}>
              <label>
                <h1>find your movie</h1>
                <input 
                  type="search"
                  placeholder="Search for a movie..."
                  value={search}
                  onChange={handleOnChange}
                />
              </label>
              <div className="options_search">
                <div className="option">
                  <h2>search by</h2>
                    <button type="button">title</button>
                    <button type="button">genre</button>
                </div>
                <div className="btn_search">
                  <button 
                    className="search" 
                    type="submit">search
                  </button>
                </div>
              </div>
            </form>
        </div> 
      </div>
      <div className="filter_section">
        <div className="results">
          <span>Found <span>{totalResults}</span> movies</span>
        </div>
        <div className="filters">
          <div className="sort">
            <h2>Sort :</h2>
          </div>
          <div className="sort_options">
            <button 
              type="button"
              className="release"
              onClick={sortRelease}>Release Date
            </button>
            <button 
              type="button" 
              className="rating"
              onClick={sortRate}>Rating
            </button>
          </div>
        </div>
      </div>
      <div className="movie_list">
          {loading ? <Loader /> : movies.length ? (movies.map((movie) => (
            <MovieItem 
              key={movie.id} 
              movie={movie}
              onMovieClick={(_checkMovie => {
              setModalActive(_checkMovie);
            })
            } />
          ))) : ('Not Found')
          }
      </div>
      <ModalWindow 
        movie={modalActive}
        onClose={()=> setModalActive(null)}
      />
      <Pagination 
        totalPage={totalPage}
        handlePageClick={handlePageClick}
        selectedPage={currentPage}
      />
  </div>    
  )
};

export default MovieList;
