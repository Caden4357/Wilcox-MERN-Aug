import React, { useState } from 'react';
import axios from 'axios';
const CreateUser = (props) => {

    const [newPerson, setNewPerson] = useState({
        name: "",
        age: ""
    })

    const inputHandler = (e) => {
        let newStateObject = {...newPerson};
        newStateObject[e.target.name] = e.target.value;
        console.log(newStateObject)
        setNewPerson(newStateObject);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/newPerson`, 
        newPerson
        )
            .then((res) => {
                console.log(res.data)
                setNewPerson({
                    name:"",
                    age:""
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" value={newPerson.name} name="name"
                    onChange={inputHandler}/>
                <label>Age:</label>
                <input type="number" value={newPerson.age} name="age"
                    onChange={inputHandler}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default CreateUser;