import React from 'react';
import {Router } from '@reach/router';
import Welcome from './components/Welcome';
import Number from './components/Number';
import Word from './components/Word';
import './App.css';

function App() {


  return (
    <div className="App">
      <Router>
        <Welcome path="/welcome"/>
        <Number path="/:id"/>
        <Word path="/word/:word"/>
      </Router>
    </div>
  );
}

export default App;
