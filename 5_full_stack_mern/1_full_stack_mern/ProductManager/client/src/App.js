import React, {useEffect, useState} from 'react';
import CreateProduct from './components/CreateProduct';
import axios from "axios"
import './App.css';

function App() {
  const [message, setMesssage] = useState("Loading...")
  useEffect(() => {
      axios.get("http://localhost:3000/api")
          .then(res => setMesssage(res.data.message))
  }, []);
  return (
    <div className="App">
      <CreateProduct/>
    </div>
  );
}

export default App;
