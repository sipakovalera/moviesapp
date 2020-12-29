/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import MovieItem from '../movie_item/movie_item'; 
import ModalWindow from '../../modal/modal';
import Loader from '../../loader/loader';
import Pagination from '../../pagination/pagination';
import '../../pagination/pagination.css';
import PopularMovies from '../../popular/popular_movies';

import { fetchMovies, searchMovies } from '../../../resources/movie.api';

const MovieList = () => {
  const [ movies, setMovies ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ modalActive, setModalActive ] = useState(null);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ loading, setLoading ] = useState(false);
  const [ totalPage, setTotalPage ] = useState(0);
  const [totalResults, setTotalResults ] = useState(0);


  useEffect(() => {
    const init = async() => {
      debugger;
      setLoading(true);
      const data = await fetchMovies(currentPage + 1);
        setAllStates(data);
      }

      init()
    }, [currentPage]);

  useEffect(() => {
    const init = async() => {
      setLoading(true);
      const data = await searchMovies(search);
        setAllStates(data);
      }
  
        init()
  }, [search]);  


  const setAllStates = (data) => {
    const { total_pages, total_results, results} = data;
      setTotalResults(total_results);
      setTotalPage(total_pages);
      setMovies(results);
      setLoading(false);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (search) {
      setSearch(search);
   }
  }

  const handleOnChange = (search) => {
    setSearch(search.target.value);
  }

  const handlePageClick = ({selected:selectedPage}) => {
     if(search){
       setSearch(search);
     }
     setCurrentPage(selectedPage);
  }

  return (
      <div className="container"> 
          <div className="banner">
            <div className="search_section">
              <form onSubmit={handleOnSubmit}>
                <label>
                  <h1>find your movie</h1>
                    <div className="search_submit">
                      <input 
                        type="search"
                        placeholder="Search for a movie..."
                        value={search}
                        onChange={handleOnChange}
                      />
                      <button 
                        className="search" 
                        type="submit">search
                      </button>
                    </div>
                </label>
              </form>
          </div> 
          <PopularMovies />
        </div>
          <div className="results">
            <p>Found <span>{totalResults}</span> movies</p>
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
