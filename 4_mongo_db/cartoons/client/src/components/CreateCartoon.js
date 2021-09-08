import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const CreateCartoon = (props) => {

    // this is the best way to create a new object rather then const [name, setName] = useState("") for every key value pair of our model 
    // the keys whos values should be numbers are in string format and we dont worry about this because mongo and mongoose turns it into a number if its valid automatically becuase we set it up in our model/schema to be a number 
    const [newCartoon, setNewCartoon] = useState({
        //setting the type ahead of time is to prevent bugs like uncontrolled input error
        //empty strings do not show in the database for ex. if by deffault suitableForKids was set to false and someone filled out the form and didnt fill out that field cause its not required it would then get stored in the db as false and it could be true  
        name:"",
        era:"",
        image:"",
        genre:"",
        rating:"",
        suitableForKids:""
    })

    const newChangeHandler = (e) => {
        let newStateObject = {...newCartoon};
        if(e.target.type === "checkbox"){
            console.log(e.target.name, e.target.checked);
            newStateObject[e.target.name] = e.target.checked;
        }
        else{
            newStateObject[e.target.name] = e.target.value;
        }
        setNewCartoon(newStateObject);
    }

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/cartoons',
        newCartoon
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            navigate('/cartoons')
        })
        .catch((err) =>{
            console.log(err);
        })
    }




    return (
        <div>
            <h1>Create Cartoon</h1>
            <form onSubmit={newSubmitHandler}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input onChange={newChangeHandler} name="name" type="text" value={newCartoon.name}/>
                </div>
                <div>
                    <label htmlFor="era">Era</label>
                    <select onChange={newChangeHandler} name="era" value={newCartoon.era}>
                        <option value="none" defaultValue hidden>Select An Era</option>
                        <option value ="1920">1920</option>
                        <option value ="1930">1930</option>
                        <option value ="1940">1940</option>
                        <option value ="1950">1950</option>
                        <option value ="1960">1960</option>
                        <option value ="1970">1970</option>
                        <option value ="1980">1980</option>
                        <option value ="1990">1990</option>
                        <option value ="2000">2000</option>
                        <option value ="2010">2010</option>
                        <option value ="2020">2020</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <select onChange={newChangeHandler} name="genre" value={newCartoon.genre}>
                        <option value="none" defaultValue hidden>
                            Select A Genre
                        </option>
                        <option value="Anime">Anime</option>
                        <option value="Manga">Manga</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Action">Action</option>
                        <option value="Children">Children</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Horror">Horror</option>
                        <option value="Comic">Comic</option>
                        <option value="Parody">Parody</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input onChange={newChangeHandler} name="image" type="text" value={newCartoon.image}/>
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <input onChange={newChangeHandler} name="rating" type="number" value={newCartoon.rating}/>
                </div>
                <div>
                    <label htmlFor="suitableForKids">Kid Friendly:</label>
                    <input onChange={newChangeHandler} name="suitableForKids" type="checkbox" checked={newCartoon.suitableForKids}/>
                </div>
                <button>Add Cartoon</button>
            </form>
        </div>
    )
}
export default CreateCartoon;