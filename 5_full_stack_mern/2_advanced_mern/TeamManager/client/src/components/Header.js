import React from 'react';
import {Link, navigate} from '@reach/router';

const Header = (props) => {

    return (
        <div className="background-header">
            <h1 className="header">Players Database</h1>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Link className="header-links" to="/status/games">Manage Player Status</Link>
                <Link className="header-links" to="/">Manage Players</Link>
                <Link className="header-links" to="/new/player">Add Players</Link>
            </div>
            <hr/>
        </div>
    )
}
export default Header;