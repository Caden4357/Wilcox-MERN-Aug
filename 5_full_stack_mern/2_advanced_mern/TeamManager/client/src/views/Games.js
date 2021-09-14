import { Router } from '@reach/router';
import React, {useEffect, useState} from 'react';
import GameForm from '../components/GameForm';

const Games = (props) => {
    const [playerList, setPlayerList] = useState([]);

    return(
        <div>
            <GameForm playerList={playerList} setPlayerList={setPlayerList}/>
        </div>
    )
}
export default Games;