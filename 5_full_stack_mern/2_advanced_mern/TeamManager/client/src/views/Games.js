import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router';
import AllPlayers from '../components/AllPlayers';
import PlayerStatus from '../components/PlayerStatus';

const Games = (props) => {
    const {dayIndex, setDayIndex, day, setDay} = props;
    const [playerList, setPlayerList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/list`)
            .then((res) => {
                console.log(res.data);
                setPlayerList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {
                day.map((day, idx) =>(
                    idx === dayIndex?
                    <h1>Player Status - {day.name}</h1>
                    :null
                ))
            }
            <div>
                {
                    day.map((item, idx) => (
                        idx === dayIndex?
                        <div onClick={(e) => {setDayIndex(idx)}} style={{textDecoration: "underline"}}>
                            {item.name }
                        </div>
                        :
                        <div onClick={(e) => {setDayIndex(idx)}}> 
                            {item.name}
                        </div>
                    ))
                }
            </div>
            <table style={{border: "1px solid black", width:"50%", marginLeft:"auto", marginRight: "auto", marginTop:"100px"}}>
                <tbody>
                    <tr>
                        <td style={{border: "1px solid black"}}>Player</td>
                        <td style={{border: "1px solid black"}}>Availability</td>
                    </tr>

                    {
                        playerList.map((player, idx) => (
                            <tr key={idx}>
                                <td style={{border: "1px solid black"}}>{player.name}</td>
                                <td style={{border: "1px solid black"}}><PlayerStatus day={day} setDay={setDay} dayIndex={dayIndex} setDayIndex={setDayIndex} player={player}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Games;

