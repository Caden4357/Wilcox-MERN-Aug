import React, {useEffect, useState} from "react";



const Form = (props) => {
    
    const {submitHandler, buttonText, cartoon,  setCartoon, errors} = props;
    
    const newChangeHandler = (e) => {
        let newStateObject = {...cartoon};
        if(e.target.type === "checkbox"){
            console.log(e.target.name, e.target.checked);
            newStateObject[e.target.name] = e.target.checked;
        }
        else{
            newStateObject[e.target.name] = e.target.value;
        }
        setCartoon(newStateObject);
    }

    return (
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="">Name:</label>
            <input onChange={newChangeHandler} name="name" type="text" value={cartoon.name}/>
            {
                errors.name?
                <span style={{color:"red"}}>{errors.name.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="era">Era</label>
            <select onChange={newChangeHandler} name="era" value={cartoon.era}>
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
            {
                errors.era?
                <span style={{color:"red"}}>{errors.era.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="genre">Genre</label>
            <select onChange={newChangeHandler} name="genre" value={cartoon.genre}>
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
            {
                errors.genre?
                <span style={{color:"red"}}>{errors.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="image">Image URL:</label>
            <input onChange={newChangeHandler} name="image" type="text" value={cartoon.image}/>
            {
                errors.image?
                <span style={{color:"red"}}>{errors.image.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="rating">Rating</label>
            <input onChange={newChangeHandler} name="rating" type="number" value={cartoon.rating}/>
            {
                errors.rating?
                <span style={{color:"red"}}>{errors.rating.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="suitableForKids">Kid Friendly:</label>
            <input onChange={newChangeHandler} name="suitableForKids" type="checkbox" checked={cartoon.suitableForKids}/>
        </div>
        <button>{buttonText}</button>
    </form>
    )
}
export default Form;