import React from 'react';
import {Link} from '@reach/router';

const FrontPage = (props) => {


    return(
        <div className="wrapper">
            <div className="main">
                    <div className="header">
                        <h1>Caden Wilcox, Jr. Developer</h1>
                    </div>
                <div className="about-me">
                    <h1>About Me</h1>
                    <p>I'm a full stack web developer specializing in JavaScript, Python, and Java. I have experience with both MySQL and Mongoose(NoSQL) Databases, as well as Django framework and the React library </p>
                    <h3>Lets Check Out Whats Really Important</h3>
                    <Link to="/">GitHub</Link>
                </div>
            </div>
        </div>
    )
}
export default FrontPage;