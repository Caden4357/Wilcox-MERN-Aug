import React, {useEffect, useState} from 'react';
import Detail from './components/Detail';
import {Router} from "@reach/router";
import axios from "axios"
import './App.css';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/:id"/>
      </Router>
    </div>
  );
}

export default App;
