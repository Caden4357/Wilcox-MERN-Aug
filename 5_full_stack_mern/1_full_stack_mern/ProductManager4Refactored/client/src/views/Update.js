import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router';
import Form from '../components/Form';
import axios from 'axios';

const Update = (props) => {
    const {id} = props;
    const [ updatedProduct, setUpdatedProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                setUpdatedProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    const updateHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.put(`http://localhost:8000/api/product/${id}`, 
        updatedProduct
        )
            .then((res) => {
                navigate("/")
            })

            .catch(err=>console.log(err))
    }

    return (
        <div className="background">
            <Form product={updatedProduct} setProduct={setUpdatedProduct} submitHandler={updateHandler}/>
        </div>
    )
}
export default Update;       