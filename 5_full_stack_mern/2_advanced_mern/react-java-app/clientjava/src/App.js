import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import AllUsers from './components/AllUsers';
import CreateUser from './components/CreateUser';
import Update from './components/Update';

function App() {

  return (
    <div className="App">
      <Router>
        <AllUsers default/>
        <CreateUser path="/create/person"/>
        <Update path="/editPerson/:id"/>
      </Router>
    </div>
  );
}

export default App;
