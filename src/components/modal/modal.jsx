import React from 'react';
import Modal from 'react-modal';
import './modal.css';
import { IMG_API, defaultPoster } from '../movies/movie_item/movie_item';
import TrailerMovies from '../trailer/trailer_movies';
import AddFavourite from '../favourite/add_favourite/add_fav';

const ModalWindow = ({movie, onClose }) => {
  const { title, poster_path: posterPath, overview,  vote_average: rating, release_date, id } = movie || {};

  return (
    <Modal 
      isOpen={movie !== null} 
      onRequestClose={onClose} 
      overlayClassName="total_movie" 
      className="overlay">
        <div className="movie_modal">
          <div className="btn_close">
            <button  
              className="close"
              onClick={onClose}>Close
            </button>
          </div>
          <div className="modal_item">
            <div className="poster_modal">
              <img src={posterPath ?  (`${IMG_API}${posterPath}`) : defaultPoster } alt={title}/>
              <AddFavourite AddFavourite={movie} />
            </div>
            <div className="context">
              <div className="title_modal">Title: <span>{title}</span></div>
              <div className="overview">Overview: <span>{overview}</span></div>
              <div className="rating_modal">Rating: <span>{rating}</span></div>
              <div className="release_modal">Release date: <span>{release_date}</span></div>
              <TrailerMovies openTrailer={id} />
            </div>       
          </div>
        </div>
      </Modal>
    );
}
 export default ModalWindow;
