import React, {useState, useEffect} from 'react';
import axios from 'axios'
import PlayerStatus from '../components/PlayerStatus';

const Games = (props) => {
    const {dayIndex, setDayIndex, day, setDay} = props;
    const [playerList, setPlayerList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/list`)
            .then((res) => {
                setPlayerList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div className="game">
                {
                    day.map((item, idx) => (
                        idx === dayIndex?
                        <div onClick={(e) => {setDayIndex(idx)}} style={{color: "red"}}>
                            <h1>{item.name }</h1>
                        </div>
                        :
                        <div onClick={(e) => {setDayIndex(idx)}}> 
                        <h1>{item.name}</h1>
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

