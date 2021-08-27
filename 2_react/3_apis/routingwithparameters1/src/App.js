import React from 'react';
import {Router } from '@reach/router';
import Welcome from './components/Welcome';
import Word from './components/Word';
import WordAndColor from './components/WordAndColor';
import './App.css';

function App() {


  return (
    <div className="App">
      <Router>
        <Welcome path="/welcome"/>
        <Word path="/:word"/>
        <WordAndColor path="/:word/:color/:bgColor"/>
      </Router>
    </div>
  );
}

export default App;
