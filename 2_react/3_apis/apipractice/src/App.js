import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [planet, setPlanet] = useState({});
  const [planetNumber, setPlanetNumber] = useState(1);
  const [inhabitantsLink, setInhabitantsLink] = useState([]);
  const [inhabitants, setInhabitants] = useState({});
  const [toggle, setToggle] = useState(false);

  // // calling an API using fetch (the hard way)
  // useEffect(() =>{
  //   //Fetching an API address using backticks we can preform string concatination and plug in our variable from state which is planet number which will change and it will update 
  //   fetch(`https://swapi.dev/api/planets/${planetNumber}`)
  //   //here we are taking the response and converting it to json so we can read it 
  //     .then((res) => {
  //       // .json is also a promise that we need to deal with 
  //       return res.json();
  //     })
  //     //this is the response to our .json()
  //     .then((res) => {
  //       console.log(res)
  //       // and here were setting the planet equal to our planet number state 
  //       setPlanet(res);
  //     })
  //     // we must always have this catch statement very important to catch errors should there be any 
  //     .catch((err) => console.log(err))
  // },[planetNumber]);

  useEffect(() => {
    // along with .get we have .post .put and .delete that we can use depending on what we want the user to be able to use 
    // here we just want information so we just need to use get to display it 
    axios.get(`https://swapi.dev/api/planets/${planetNumber}`)
      .then((res) => {
        console.log(res);
        setPlanet(res.data);
        console.log(res.data.residents);
        setInhabitantsLink(res.data.residents);
      })
      .catch((err) => console.log(err))
  }, [planetNumber]);

  useEffect(() => {
    if(inhabitantsLink[0]){
      axios.get(inhabitantsLink[0])
        .then((res) =>{
          console.log(res);
          console.log(res.data);
          setInhabitants(res.data)
        })
        .catch((err) => console.log(err))
    }
    // By default useEffect runs once with []
    // Without it, and no dependicies it will run forever
  }, [inhabitantsLink])


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
      <button onClick= {(e) => setToggle(!toggle)}>Get A Famous Person</button>
      {
        toggle && inhabitants.name?
        <p>Famous Citizen: {inhabitants.name}</p>
        :null
      }
      <button onClick={planetChangerPrevious}>Previous Planet</button>
      <button onClick={planetChangerNext}>Next Planet</button>
    </div>
  );
}

export default App;
