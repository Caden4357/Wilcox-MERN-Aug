import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Delete = (props) => {
    const {id, deleteFilter} = props;

    const deleteHandler = (e) => {
        axios.post(`http://localhost:8080/${id}/delete`)
            .then((res) => {
                    deleteFilter(id);
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default Delete;