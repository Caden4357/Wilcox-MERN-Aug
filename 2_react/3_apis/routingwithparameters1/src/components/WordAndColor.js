import React from 'react';
import { Router } from '@reach/router';

const WordAndColor = (props) => {
    const {color, bgColor} = props;
    
    return(
        <div style = {{backgroundColor: bgColor}}>
            <h1 style={{color:color}}>The Word is: {props.word}</h1>
        </div>
    )
}
export default WordAndColor;