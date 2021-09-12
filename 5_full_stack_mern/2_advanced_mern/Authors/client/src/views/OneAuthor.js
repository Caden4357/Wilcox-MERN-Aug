import React, {useEffect, useState} from "react";
import axios from 'axios';

const OneAuthor = (props) => {
    const {id} = props;

    const [oneAuthor, setOneAuthor] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                setOneAuthor(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    return(
        <div>
            <h1>Author</h1>
            <h2>Name: {oneAuthor.name}</h2>
        </div>
    )
} 
export default OneAuthor;