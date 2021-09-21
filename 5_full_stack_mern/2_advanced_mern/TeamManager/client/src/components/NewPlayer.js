import React, { useState } from 'react'
import Form from './Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewPlayer = (props) => {
    const [errors, setErrors] = useState({});
    const [newPlayer, setNewPlayer] = useState({
        name: "",
        position: ""
    })

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/new/player`,
        newPlayer
        )
            .then((res) => {
                setNewPlayer({
                    name:"",
                    position: ""
                }, navigate('/'))
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
        }
    return (
        <div>
            <Form
            submitHandler={newSubmitHandler}
            player={newPlayer}
            setPlayer={setNewPlayer}
            errors={errors}/>
        </div>
    )
}
export default NewPlayer;