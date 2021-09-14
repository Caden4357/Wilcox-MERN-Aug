import React, {useEffect, useState} from "react";
import axios from 'axios';

const OnePlayer = (props) => {
    const {id} = props;

    const [onePlayer, setOnePlayer] = useState({});

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/player/${id}`)
            .then((res) => {
                setOnePlayer(res.data)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h1>Player</h1>
            <h2>Name: {onePlayer.name}</h2>
            <h2>Position: {onePlayer.position}</h2>
            {
                onePlayer.playing === true?
                <h2>Playing tonight</h2>
                :<h2>{onePlayer.name} Is Out Tonight</h2>
            }
        </div>
    )
}
export default OnePlayer;