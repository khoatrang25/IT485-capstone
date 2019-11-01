import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Search from './components/Search';
import List from './components/List';
import List1 from './components/List1'
import BookOwn from './containers/BookOwn/BookOwn'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/search" component={Search}/>
          <Route path="/list" component={List}/>
          <Route path="/list1" component={List1}/>
          <Route path="/bookOwn" component={BookOwn}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;