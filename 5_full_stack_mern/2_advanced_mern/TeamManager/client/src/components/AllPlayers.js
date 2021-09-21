import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DeletePlayer from './DeletePlayer';

const AllPlayers = (props) => {

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
            <table style={{border: "1px solid black", width:"50%", marginLeft:"auto", marginRight: "auto", marginTop:"100px"}}>
                <tr>
                    <th style={{border: "1px solid black"}}>Name:</th>
                    <th style={{border: "1px solid black"}}>Position:</th>
                    <th style={{border: "1px solid black"}}>Action:</th>
                </tr>
                {
                    playerList?
                    playerList.map((player, idx) => (
                        <tr key={idx}>
                            <td style={{border: "1px solid black"}}>{player.name}</td>
                            <td style={{border: "1px solid black"}}>{player.position}</td>
                            <td style={{border: "1px solid black"}}><DeletePlayer playerList={playerList} setPlayerList={setPlayerList} id={player._id}/></td>
                        </tr>
                    ))
                    :null
                }
            </table>
        </div>
    )
}
export default AllPlayers;