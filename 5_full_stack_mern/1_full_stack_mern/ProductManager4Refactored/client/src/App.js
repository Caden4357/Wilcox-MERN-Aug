import React, {useEffect, useState} from 'react';
import Detail from './views/Detail';
import {Router} from "@reach/router";
import Update from './views/Update';
import Header from './components/Header';
import './App.css';
import Main from './views/Main';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Main default/>
        <CreateProduct path="/new/product"/>
        <Detail path="/product/:id"/>
        <Update path="/product/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
