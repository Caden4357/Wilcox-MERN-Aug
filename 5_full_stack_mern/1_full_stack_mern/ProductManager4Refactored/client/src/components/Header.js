import React from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
const Header = (props) => {

    return (
        <div>
            <h1>Buy Buy Buy!</h1>
            <ul style={{display:"flex", justifyContent:"space-around", listStyle:"none"}}>
            
            <li><Link style={{textDecoration:"none", fontSize:"26px", color:"gray"}} to="/">All Products</Link>
            </li>

            <li><Link style={{textDecoration:"none", fontSize:"26px", color:"gray"}} to="/new/product">New Product</Link>
            </li>

        </ul>
        </div>
    )
}
export default Header;