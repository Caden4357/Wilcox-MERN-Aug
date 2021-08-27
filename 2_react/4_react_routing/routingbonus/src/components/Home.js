import React from 'react';





const Home = (props) => {
    if(isNaN(props)){
        if(!props.word){
            return(
                <h1>Welcome!</h1>
            )
        }
        else{
            return(
                <p style={
                    props.color?
                    {color: props.color, backgroundColor:props.bgCol}
                    :null
                }>
                    props word {props.word}
                </p>
            )
        }
    }
        else{
            return(
                <p>Number: {props.word}</p>
            )
        }
}
export default Home;