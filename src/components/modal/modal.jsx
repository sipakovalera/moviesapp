import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './modal.css';
import { IMG_API, defaultPoster } from '../../const/constant';
import TrailerMovies from '../trailer/trailer_movies';


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
              <Link 
                to={`/${id}`} 
                className="btn_details"
              >
                Details
              </Link>
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
