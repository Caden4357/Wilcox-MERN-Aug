import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [planet, setPlanet] = useState({});
  const [planetNumber, setPlanetNumber] = useState(1);

  useEffect(() =>{
    fetch(`https://swapi.dev/api/planets/${planetNumber}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res)
        setPlanet(res);
      })
      .catch((err) => console.log(err))
  },[planetNumber]);

  const planetChangerNext = (e) => {
    if(planetNumber === 60){
      setPlanetNumber(1);
    }else{
      setPlanetNumber(planetNumber + 1);
    }
  }


  const planetChangerPrevious = (e) => {
    if(planetNumber === 1){
      setPlanetNumber(60);
    }else{
      setPlanetNumber(planetNumber - 1);
    }
  }

  return (
    <div className="App">
      <p>Planet Name: {planet.name}</p>
      <p>Climate: {planet.climate}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Population: {planet.population}</p>

      <button onClick={planetChangerNext}>Next Planet</button>
      <button onClick={planetChangerPrevious}>Previous Planet</button>
    </div>
  );
}

export default App;
