import React from 'react';
import {Router } from '@reach/router';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <PageOne path="/route-one"/>
        <PageTwo path="/route-two"/>
      </Router>
    </div>
  );
}

export default App;
