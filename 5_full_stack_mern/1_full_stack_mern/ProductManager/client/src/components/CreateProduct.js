import React, { useState } from 'react'
import axios from 'axios';

const CreateProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.00);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person

        const newProduct = {
            title,
            price,
            description
        };

        axios.post('http://localhost:8000/api/newProduct/', newProduct)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br/>
                    <input type="text" value={ title } onChange = {(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price</label>
                    <br/>
                    <input type="number" value={ price } onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description</label>
                    <br/>
                    <input type="text" value={ description } onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default CreateProduct;       