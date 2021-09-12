import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';

const EditAuthor = (props) => {
    const {id} = props;
    const [errors, setErrors] = useState({});
    const [updatedAuthor, setUpdatedAuthor] = useState({
        name: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                setUpdatedAuthor(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    const updateHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/edit/${id}`, 
        updatedAuthor)
            .then((res) => {
                navigate('/')
            })
            .catch((err) =>{
                console.log(err)
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }

    return(
        <div>
            <Form 
            submitHandler={updateHandler}
            author={updatedAuthor} 
            setAuthor={setUpdatedAuthor}
            errors={errors}/>
        </div>
    )
}
export default EditAuthor;