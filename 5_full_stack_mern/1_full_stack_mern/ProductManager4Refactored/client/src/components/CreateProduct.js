import React, { useState } from 'react'
import Form from './Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreateProduct = (props) => {
    const [ newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const newSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/new/product', 
        newProduct
        )
            .then((res) => {
                console.log(res);
                setNewProduct({
                    title: "",
                    price: "",
                    description: ""
                }, navigate('/'))
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="background">
            <Form product={newProduct} setProduct={setNewProduct} submitHandler={newSubmitHandler}/>
        </div>
    )
}
export default CreateProduct;       