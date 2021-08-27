import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Home path="/:word"/>
        <Home path="/:word/:color/:bgCol"/>
      </Router>
    </div>
  );
}

export default App;
