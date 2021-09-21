import React, {useEffect, useState} from "react";
import axios from 'axios';
import {navigate} from '@reach/router';

const DeletePlayer = (props) => {
    const {id, playerList, setPlayerList} = props;

    const deleteFilter = (id) => {
        let newList = playerList.filter((player) => player._id !== id);
        setPlayerList(newList);
    }

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/player/delete/${id}`)
            .then((res) => {
                if(playerList){
                    deleteFilter(id);
                }
                else{
                    navigate('/')
                }
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default DeletePlayer;