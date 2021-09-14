import React from 'react';
import {Link, navigate} from '@reach/router';

const Header = (props) => {

    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Link to="/status/game/1">Manage Player Status</Link>
                <Link to="/">Manage Players</Link>
                <h1>Players Database</h1>
                <Link to="/new/player">Add Players</Link>

            </div>
        </div>
    )
}
export default Header;