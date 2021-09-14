import Main from './views/Main';
import {Router} from '@reach/router';
import './App.css';
import Header from './components/Header';
import NewPlayer from './components/NewPlayer';
import Games from './views/Games';
import OnePlayer from './views/OnePlayer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Main default/>
        <NewPlayer path="/new/player"/>
        <OnePlayer path="/player/:id"/>
        <Games path="status/game/:id"/>
      </Router>
    </div>
  );
}

export default App;
