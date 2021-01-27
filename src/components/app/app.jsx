import React from 'react';
import ReactModal from 'react-modal';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from '../movies/movie_list/movie_list';
import Details from '../details/details';

ReactModal.setAppElement('#root');

const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route  exact path="/" component={MovieList}></Route>
        <Route path="/:id" component={Details}></Route>
      </Switch>
    </Router>  
  );
}

export default App;




