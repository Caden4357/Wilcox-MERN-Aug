import {Router} from '@reach/router';
import './App.css';
import Header from './components/Header';
import NewPlayer from './components/NewPlayer';
import Games from './views/Games';
import AllPlayers from './components/AllPlayers';
import { useState } from 'react';

function App() {

  const [dayIndex, setDayIndex] = useState(0);
  const [day, setDay] = useState([{
    date: "dayOneStatus",
    name: "Game One"
  },{
    date: "dayTwoStatus",
    name: "Game Two"
  },{
    date: "dayThreeStatus",
    name: "Game Three"
  }])
  const [pageStyle, setPageStyle] = useState(3);

  return (
    <div className="main">
      <Header/>
      <Router>
        <AllPlayers default/>
        <NewPlayer path="/new/player"/>
        <Games day={day} setDay={setDay} dayIndex={dayIndex} setDayIndex={setDayIndex} path="/status/games"/>
      </Router>
    </div>
  );
}

export default App;
