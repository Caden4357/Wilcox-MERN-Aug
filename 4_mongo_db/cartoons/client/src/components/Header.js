import React from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
const Header = (props) => {

    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", { 
            // no body required for this request
        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/login");
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <header>
            <h1>The Ultimate Cartoon Collection</h1>
            <ul>
                <li><Link to="/allCartoons">All Cartoons</Link></li>
                <li><Link to="/cartoon/new"> New Cartoon</Link></li>
                <li><button onClick={logout}>Logout / Home</button></li>
            </ul>
        </header>
    )
}
export default Header;