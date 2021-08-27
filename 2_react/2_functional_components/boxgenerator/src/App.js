import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

function App() {

  const [boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray }/>
      <Display boxColorArray={ boxColorArray } />
    </div>
  );
}

export default App;
