import React from 'react';
import './details.css';
import DetailItem from './detail_item/detail_item';


const Details = ({detail}) => {

  return (
    <div className="details_container">  
        <DetailItem item={detail}/>
   </div>  
  )    
  }

export default Details;
