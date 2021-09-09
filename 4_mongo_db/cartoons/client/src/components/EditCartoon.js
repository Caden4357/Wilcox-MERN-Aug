import React, {useEffect, useState} from "react";
import Form from "./Form";
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const EditCartoon = (props) => {

    const [updatedCartoon, setUpdatedCartoon] = useState({
        //setting the type ahead of time is to prevent bugs like uncontrolled input error
        //empty strings do not show in the database for ex. if by deffault suitableForKids was set to false and someone filled out the form and didnt fill out that field cause its not required it would then get stored in the db as false and it could be true  
        name:"",
        era:"",
        image:"",
        genre:"",
        rating:"",
        suitableForKids: true
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/cartoons/${props.id}`)
            .then((res) => {
                setUpdatedCartoon(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    })

    const editCartoonHandler = (e) => {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/cartoons/${props.id}`,
        updatedCartoon
        )
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            navigate('/cartoons')
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    return (
        <div>
            <Form 
            submitHandler={editCartoonHandler} 
            buttonText="Update Cartoon"
            cartoon={updatedCartoon}
            setCartoon={setUpdatedCartoon}
            />
        </div>
    )
}
export default EditCartoon;