import React from 'react';
import {Link} from '@reach/router';

const FrontPage = (props) => {


    return(
        <div className="wrapper">
                <div className="about-me">
                    <h1>About Me</h1>
                    <p>I'm a full stack web developer specializing in JavaScript, Python, and Java. I have experience with both MySQL and Mongoose(NoSQL) Databases, as well as the Django framework and the React library </p>
                    <Link to="/">GitHub</Link>
                </div>
        </div>
    )
}
export default FrontPage;