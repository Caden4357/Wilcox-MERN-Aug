import React, { useState } from 'react'
import Form from './Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewAuthor = (props) => {
    const [errors, setErrors] = useState({});
    const [newAuthor, setNewAuthor] = useState({
        name: ""
    })

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/new/author`, 
        newAuthor
        )
            .then((res) => {
                setNewAuthor({
                    name: ""
                }, navigate('/'))
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }
    return(
        <div>
            <Form 
            submitHandler={newSubmitHandler}
            author={newAuthor}
            setAuthor={setNewAuthor}
            errors={errors}/>
        </div>
    )
}
export default NewAuthor;