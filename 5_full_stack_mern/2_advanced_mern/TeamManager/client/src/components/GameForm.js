import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router';

const GameForm = (props) => {
    const {id} = props;
    const [newGame, setNewGame] = useState(1);
    const {playerList, setPlayerList} = props;
    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/list`)
            .then((res) => {
                console.log(res.data);
                setPlayerList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const handlePlaying = (idx) => {
        const updatedStatus = playerList.map((player, index) => {
            if (idx === index){
                player.playing = !player.playing;
            }
            return player;
        })
        setPlayerList(updatedStatus);
    }
    return (
        <div>
            <h1>Player Status - Game {newGame}</h1>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <Link onClick={() => setNewGame(1)} to="/status/game/1" >Game 1</Link>
                <Link onClick={() => setNewGame(2)} to="/status/game/2">Game 2</Link>
                <Link onClick={() => setNewGame(3)} to="/status/game/3">Game 3</Link>
            </div>
            <div>
            <table style={{border: "1px solid black", width:"50%", marginLeft:"auto", marginRight: "auto", marginTop:"100px"}}>
                <tr>
                    <th style={{border: "1px solid black"}}>Name:</th>
                    <th style={{border: "1px solid black"}}>Position:</th>
                    <th style={{border: "1px solid black"}}>Actions:</th>
                </tr>
                {
                    playerList?
                    playerList.map((player, idx) => {
                        let playing = ""
                        let notPlayingClass = ""
                        let undecided = "undecided"
                        if(undecided === "undecided" && player.playing == true){
                            undecided = "" 
                            notPlayingClass = ""
                            playing = "completed"
                        }
                        if(player.playing == false){
                            playing = ""
                            notPlayingClass = "notCompleted"
                            undecided = ""
                        }
                    return(
                        <tr>
                            <td style={{border: "1px solid black"}}><Link to={`player/${player._id}`}>{player.name}</Link></td>
                            <td style={{border: "1px solid black"}}>{player.position}</td>
                            <td style={{border: "1px solid black"}}>
                            <button className={playing} key={idx} onClick={(e) => handlePlaying(idx)}>Playing</button>
                            <button className={notPlayingClass} onClick={(e) => handlePlaying(idx)}>Not Playing</button>
                            <button className={undecided} >Undecided</button>
                            </td>
                        </tr>
                    )})
                    :null
                }
            </table>
        </div>
        </div> 
    )
}
export default GameForm;