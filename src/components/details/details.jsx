import React from 'react';
import { Link } from 'react-router-dom';
import './details.css';

const Details = ({movie}) => {
  const { title } = movie || {};
  return (
    <div className="details_container">
    <Link to="/"><button className="btn_home">Go Home</button></Link>
      <div className="details_title">{title}</div>
    </div>
  )
}

export default Details;
