import './App.css';
import { Router } from '@reach/router';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import LogAndReg from './views/LogAndReg';
import UploadPicture from './components/UploadPicture';

function App() {
  return (
    <div className="App">
      <Router>
        <LogAndReg default/>
        <Dashboard path="/dashboard"/>
        <UploadPicture path="/upload/:id"/>
      </Router>
    </div>
  );
}

export default App;
