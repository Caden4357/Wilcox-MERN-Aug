import React, {useEffect, useState} from "react";
import DeleteCartoon from "./DeleteCartoon";
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const OneCartoon = (props) => {
    const [oneCartoon, setOneCartoon] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cartoons/${props.id}`)
            .then((res) => {
                setOneCartoon(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h1>{oneCartoon.name}</h1>
            <img src={oneCartoon.image} alt="image" style={{width:"200px", height:"200px"}}/>
            <h4>{oneCartoon.era}</h4>
            <h4>{oneCartoon.genre}</h4>
            <h4>{oneCartoon.rating}</h4>
            {
                oneCartoon.suitableForKids === true?
                <p>This Is Kid Friendly</p>
                :<p>May Not Be Suitable For Kids</p>
            }
            <DeleteCartoon id={oneCartoon._id}/>
        </div>
    )
}
export default OneCartoon;