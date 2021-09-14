import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router';

const PlayerStatus = (props) => {
    const [playerStatus, setPlayerStatus] = useState(["dayOneStatus", "dayTwoStatus","dayThreeStatus"]);
    const {player, day, dayIndex, setDayIndex} = props;

    const editStatus = (e) => {
        player[day[dayIndex].date] = e.target.value;
        setDayIndex([dayIndex]);
        axios.put(`http://localhost:8000/api/player/edit/${player._id}`, player)
            .then((res) => {
                console.log(e)
                console.log(res.data);
                console.log(e.target.value)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            {
                player[playerStatus[dayIndex]] === "playing"?
                <button onClick={editStatus} name="playing" value="playing" style={{backgroundColor: "green"}}>Playing</button>
                :<button onClick={editStatus} name="playing" value="playing">Playing</button>
            }
                        {
                player[playerStatus[dayIndex]] === "notPlaying"?
                <button onClick={editStatus} name="notPlaying" value="notPlaying" style={{backgroundColor: "red"}}>Not Playing</button>
                :<button onClick={editStatus} name="notPlaying" value="notPlaying">Not Playing</button>
            }
                        {
                player[playerStatus[dayIndex]] === "undecided"?
                <button onClick={editStatus} name="undecided" value="undecided" style={{backgroundColor: "yellow"}}>Undecided</button>
                :<button onClick={editStatus} name="undecided" value="undecided">Undecided</button>
            }
        </div> 
    )
}
export default PlayerStatus;