import React from 'react';
import '../detail_item/detail.css';
import { Link } from 'react-router-dom';
import { IMG_API, defaultPoster } from '../../../const/constant';

const Detail = ({movie}) => {
  const {
    title,
    release_date,
    budget,
    homepage,
    original_title, 
    overview,
    popularity, 
    revenue, 
    runtime, 
    status, 
    tagline, 
    vote_average, 
    vote_count, 
    original_language, 
    backdrop_path
  } = movie;

  return (
    <div 
      className="details_container" 
      style={ backdrop_path ? {backgroundImage: `linear-gradient(to bottom, rgba(14, 1, 1, 0.9) 0%,rgba(0, 0, 0, 0.7) 100%), url(${IMG_API}${backdrop_path})`
    } : {backgroundImage: `linear-gradient(to bottom, rgba(14, 1, 1, 0.9) 0%,rgba(0, 0, 0, 0.7) 100%), url(${IMG_API}${defaultPoster})`}}>
     <div className="details_head">
       <div className="details_title">{title}</div>
       <Link to="/" className="btn_back"><i className="fas fa-chevron-circle-left fa-3x"></i></Link>
     </div>
      <div className="details_information">
          <div className="details_tagline">"{tagline ? tagline : ''}"</div>
          <div className="detail_item">
            <div className="detail">
              <span>Year :</span>
              <p>{release_date ? release_date.substring(0,4) : 'No date'}</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Original title:</span>
                <p>{original_title ? original_title : '-' }</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Original language:</span>
                <p>{original_language ? original_language : '-'}</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Popularity:</span>
                <p>{popularity ? popularity : '-' }</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Overview:</span>
                <p>{overview}</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Homepage:</span>
                <p>{homepage ? homepage : '-' }</p>
            </div>
            <hr/>
            <div className="detail">
              <span>Budget:</span>
              <p>{budget ? budget : '-'} $</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Revenue:</span>
                <p>{revenue ? revenue : '-' } $</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Vote average:</span>
                <p>{vote_average ? vote_average : '-' }</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Vote count:</span>
                <p>{vote_count ? vote_count : '-' }</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Runtime:</span>
                <p>{runtime ? runtime : '-' } minutes</p>
            </div>
            <hr/>
            <div className="detail">
                <span>Status:</span>
                <p>{status ? status  : '-' }</p>
            </div>
            <hr/>
          </div>
      </div>
    </div>
  )
}

export default Detail;
