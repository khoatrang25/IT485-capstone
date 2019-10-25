import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/example" component={Example}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;