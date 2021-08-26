import React from 'react';
import {Router } from '@reach/router';

const Word = (props) => {
    return(
        <div>
            <h1>The Word is: {props.word}</h1>
        </div>
    )
}
export default Word;