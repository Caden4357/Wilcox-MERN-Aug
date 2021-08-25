import React from"react";
import { Link } from "@reach/router";

const PageTwo = (props) => {
    return (
        <div>
            <h1>You Are On Page Two Good How are You?</h1>
            <br/>
            <Link to="/route-one">Go To Page One</Link>
        </div>
    )
}
export default PageTwo;