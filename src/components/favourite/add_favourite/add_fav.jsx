import React from 'react';
import '../../modal/modal.css';

const AddFavourite = () => {

  const addToFavourite = () => {
    console.log('click')
  }

  return(
    <div className="btn-favourite">
    <button
      className="btn_add_fav"
      onClick={addToFavourite}>
        <i className="fas fa-heart fa-3x"></i>
    </button>
  </div>
  )
}

export default AddFavourite;
