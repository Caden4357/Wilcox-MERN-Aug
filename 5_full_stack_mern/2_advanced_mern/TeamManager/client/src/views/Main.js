import React, {useEffect, useState} from 'react';
import AllPlayers from '../components/AllPlayers';

const Main = (props) => {

    const [playerList, setPlayerList] = useState([]);

    return (
        <div>
            <AllPlayers playerList={playerList} setPlayerList={setPlayerList}/>
        </div>
    )
}
export default Main;