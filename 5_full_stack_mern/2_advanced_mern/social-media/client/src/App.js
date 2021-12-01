import './App.css';
import React, {useState} from 'react';
import { Router } from '@reach/router';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import LogAndReg from './views/LogAndReg';
import UploadPicture from './components/UploadPicture';

function App() {
  const [currentId, setCurrentId] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  return (
    <div className="App">
      <Router>
        <LogAndReg currentId={currentId} default/>
        <Dashboard 
        currentId={currentId}
        path="/dashboard/:currentId"/>
        {/* <UploadPicture path="/upload/:id"/> */}
      </Router>
    </div>
  );
}

export default App;
