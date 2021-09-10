import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Form = (props) => {
    
    const {submitHandler, product, setProduct} = props;

    const inputHandler = (e) => {
        let newStateObject = {...product};
        newStateObject[e.target.name] = e.target.value;
        setProduct(newStateObject)
    }

    return(
        <form onSubmit={submitHandler}>
            <p>
                <label>Title</label>
                <br/>
                <input type="text" value={ product.title } name="title" onChange = {inputHandler}/>
            </p>
            <p>
                <label>Price</label>
                <br/>
                <input type="number" value={ product.price } name="price" onChange = {inputHandler}/>
            </p>
            <p>
                <label>Description</label>
                <br/>
                <textarea type="text" value={ product.description } name="description" onChange = {inputHandler}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default Form;