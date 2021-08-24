import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        setPokemon(res.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);
  
  return (
    <div className="App">
      <ul>
        {
          pokemon.map((poke, index) => {
            return (<li key={index}>{poke.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
