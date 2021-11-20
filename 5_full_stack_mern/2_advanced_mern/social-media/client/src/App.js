import './App.css';
import { Router } from '@reach/router';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Register default/>
        <Dashboard path="/dashboard"/>
      </Router>
    </div>
  );
}

export default App;
