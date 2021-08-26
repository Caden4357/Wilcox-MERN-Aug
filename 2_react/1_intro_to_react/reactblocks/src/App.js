import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Advertisement from './components/Advertisement';
import Subcontents from './components/Subcontents';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Main/>
      <Advertisement/>
    </div>
  );
}

export default App;
