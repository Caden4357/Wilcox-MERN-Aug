import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Form = (props) => {
    
    const {submitHandler, author, setAuthor, errors} = props;

    const inputHandler = (e) => {
        let newStateObject = {...author};
        newStateObject[e.target.name] = e.target.value;
        setAuthor(newStateObject)
    }
    return(
        <form onSubmit={submitHandler}>
            <p>
                <label>Name</label>
                <input type="text" value={ author.name } name="name" onChange = {inputHandler}/>
                {
                    errors.name?
                    <span style={{color:"red"}}>{errors.name.message}</span>
                    :null
                }
            </p>
            <input type="submit"/>
        </form>
    )
}
export default Form;