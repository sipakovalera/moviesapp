import React from 'react';
import ReactModal from 'react-modal';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from '../movies/movie_list/movie_list';
import FavouriteMovies from '../favourite/fav_list/favourite_movies';
import Details from '../details/details';

ReactModal.setAppElement('#root');


const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route path="/favourite" component={FavouriteMovies}></Route>
        <Route  exact path="/" component={MovieList}></Route>
        <Route path="/:id" component={Details}></Route>
      </Switch>
    </Router>  
  );
}

export default App;




