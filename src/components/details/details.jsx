import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({movie}) => {
  const { title } = movie || {};
  return (
    <div className="details_container">
    <Link to="/">Go back</Link>
      <div className="details_title">{title}</div>
    </div>
  )
}

export default Details;
