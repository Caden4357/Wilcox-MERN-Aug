import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Form from "./Form";

const CreateCartoon = (props) => {

    // this is the best way to create a new object rather then const [name, setName] = useState("") for every key value pair of our model 
    // the keys whos values should be numbers are in string format and we dont worry about this because mongo and mongoose turns it into a number if its valid automatically becuase we set it up in our model/schema to be a number 
    const [newCartoon, setNewCartoon] = useState({
        //setting the type ahead of time is to prevent bugs like uncontrolled input error
        //empty strings do not show in the database for ex. if by deffault suitableForKids was set to false and someone filled out the form and didnt fill out that field cause its not required it would then get stored in the db as false and it could be true  
        name:"",
        era:"",
        image:"",
        genre:"",
        rating:"",
        suitableForKids:""
    })

    // const newChangeHandler = (e) => {
    //     let newStateObject = {...newCartoon};
    //     if(e.target.type === "checkbox"){
    //         console.log(e.target.name, e.target.checked);
    //         newStateObject[e.target.name] = e.target.checked;
    //     }
    //     else{
    //         newStateObject[e.target.name] = e.target.value;
    //     }
    //     setNewCartoon(newStateObject);
    // }

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/cartoons',
        newCartoon
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
            // newChangeHandler={newChangeHandler}
            submitHandler={newSubmitHandler} 
            buttonText="Add A New Cartoon" 
            cartoon={newCartoon}
            setCartoon={setNewCartoon}
            />
        </div>
    )
}
export default CreateCartoon;