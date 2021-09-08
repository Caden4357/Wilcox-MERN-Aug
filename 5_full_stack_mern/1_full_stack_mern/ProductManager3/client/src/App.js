import React, {useEffect, useState} from 'react';
import Detail from './views/Detail';
import {Router} from "@reach/router";
import Update from './views/Update';
import axios from "axios"
import './App.css';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main default/>
        <Detail path="/:id"/>
        <Update path="/product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
