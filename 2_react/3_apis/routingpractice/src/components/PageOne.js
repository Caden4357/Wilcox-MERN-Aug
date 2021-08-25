import React from 'react';
import { Link } from '@reach/router';

const PageOne = (props) => {
    return(
        <div>
            <h1>You Are On Page One How Are You?</h1>
            <br/>
            <Link to="/route-two">Go To Page Two</Link>
        </div>
    )
}
export default PageOne;