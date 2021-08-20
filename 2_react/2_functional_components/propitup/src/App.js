import React from 'react';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main name="Doe, Jane" age="45" hairColor="Black"/>

      <Main name="Smith, John" age="88" hairColor="Brown"/>

      <Main name="Fillmore, Millard" age="50" hairColor="Brown"/>

      <Main name="Smith, Maria" age="62" hairColor="Brown"/>
    </div>
  );
}

export default App;
