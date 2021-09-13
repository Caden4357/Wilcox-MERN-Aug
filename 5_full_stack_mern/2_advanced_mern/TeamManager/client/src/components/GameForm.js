import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router';

const GameForm = (props) => {
    const [newGame, setNewGame] = useState(1);
    const [playing, setPlaying] = useState(false);
    const {player, setPlayer, playerList, setPlayerList} = props;
    const [playingClass, setPlayingClass] = useState("notCompleted")
    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/list`)
            .then((res) => {
                console.log(res.data);
                setPlayerList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const playingHandler = (idx) => {
        setPlaying(!playing);
        if(playingClass === "notCompleted"){
            setPlayingClass("completed")
        }
        else{
            setPlayingClass("notCompleted")
        }
    }

    return (
        <div>
            <h1>Player Status - Game {newGame}</h1>
            <Link onClick={() => setNewGame(1)} to="/status/game/1" >Game 1</Link>
            <Link onClick={() => setNewGame(2)} to="/status/game/2">Game 2</Link>
            <Link onClick={() => setNewGame(3)} to="/status/game/3">Game 3</Link>
            <div>
            <table style={{border: "1px solid black", width:"50%", marginLeft:"auto", marginRight: "auto", marginTop:"100px"}}>
                <tr>
                    <th style={{border: "1px solid black"}}>Name:</th>
                    <th style={{border: "1px solid black"}}>Position:</th>
                    <th style={{border: "1px solid black"}}>Actions:</th>
                </tr>
                {
                    playerList?
                    playerList.map((player, idx) => (
                        <tr key={idx}>
                            <td style={{border: "1px solid black"}}><Link to={`player/${player._id}`}>{player.name}</Link></td>
                            <td style={{border: "1px solid black"}}>{player.position}</td>
                            <td style={{border: "1px solid black"}}>
                            <button className={playingClass} onClick={(e) => playingHandler(idx)}>Playing</button>
                            <button>Not Playing</button>
                            <button>Undecided</button>
                            </td>
                        </tr>
                    ))
                    :null
                }
            </table>
        </div>
        </div> 
    )
}
export default GameForm;