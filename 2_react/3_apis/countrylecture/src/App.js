import React, {useState, useEffect} from 'react';
import {Router} from '@reach/router';
import DisplayOne from './components/DisplayOne';
import Home from './view/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/> 
        <DisplayOne path="/country/:countryCode"/>
        <DisplayOne path="/country/:countryCode/:rating"/>
        <DisplayOne path="/country/:countryCode/:rating/:review"/>
      </Router>
    </div>
  );
}

export default App;
