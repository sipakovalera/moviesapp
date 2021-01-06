import React from 'react';
import ReactModal from 'react-modal';
import './app.css';
import { BrowserRouter } from "react-router-dom";
import MovieList from '../movies/movie_list/movie_list';

ReactModal.setAppElement('#root');


const App = () => {
  return (
    <BrowserRouter>
        <MovieList />  
    </BrowserRouter>
  );
}

export default App;




