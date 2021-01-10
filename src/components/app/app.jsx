import React from 'react';
import ReactModal from 'react-modal';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from '../movies/movie_list/movie_list';
import FavouriteMovies from '../favourite/fav_list/favourite_movies';

ReactModal.setAppElement('#root');


const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route path="/favourite">
          <FavouriteMovies />
        </Route>
        <Route  exact path="/">
          <MovieList />
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;




