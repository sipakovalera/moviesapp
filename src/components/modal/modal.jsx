import React, { useEffect } from 'react';
import Modal from 'react-modal';
import './modal.css';
import { IMG_API } from '../movies/movie_item/movie_item';
import { detailsMovies } from '../../resources/movie.api';

const ModalWindow = ({movie, onClose}) => {
  const { title, poster_path: posterPath, overview,  vote_average: rating, release_date } = movie || {};


    return (
          <Modal isOpen={movie !== null} onRequestClose={onClose} overlayClassName="total_movie" className="overlay">
              <div className="movie_modal">
                <div className="btn_close">
                  <button  
                    className="close"
                    onClick={onClose}>Close
                  </button>
                </div>
                <div className="modal_item">
                  <div className="poster_modal">
                    <img src={posterPath ?  (`${IMG_API}${posterPath}`) : 'https://s3.amazonaws.com/www-inside-design/uploads/2018/07/netflix-feature.jpg' } alt={title}/>
                    <div className="trailer">
                      <button 
                        type="button" 
                        name="trailer">
                        <span>Trailer</span><i class="fas fa-eye fa-2x"></i>
                      </button>
                  </div>   
                  </div>
                  <div className="context">
                    <div className="title_modal">Title: <span>{title}</span></div>
                    <div className="overview">Overview: <span>{overview}</span></div>
                    <div className="rating_modal">Rating: <span>{rating}</span></div>
                    <div className="release_modal">Release date: <span>{release_date}</span></div>
                  </div>       
                </div>
              </div>
        </Modal>
    );
}
 export default ModalWindow;