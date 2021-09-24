import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Update = (props) => {
    const {id} = props;

    const [updatedPerson, setUpdatedPerson] = useState({
        name: "",
        age: ""
    })

    const inputHandler = (e) => {
        let newStateObject = {...updatedPerson};
        newStateObject[e.target.name] = e.target.value;
        console.log(newStateObject)
        setUpdatedPerson(newStateObject);
    }
    useEffect(()=> {
        axios.get(`http://localhost:8080/getUser/${id}`)
            .then((res) => {
            console.log(res.data);
            setUpdatedPerson(res.data);
            })
            .catch((err) => console.log(err))
        }, [])
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(updatedPerson)
        axios.put(`http://localhost:8080/${id}/edit`,
        updatedPerson
        )
            .then((res) => {
                console.log(res.data)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" value={updatedPerson.name} name="name"
                    onChange={inputHandler}/>
                <label>Age:</label>
                <input type="number" value={updatedPerson.age} name="age"
                    onChange={inputHandler}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default Update;