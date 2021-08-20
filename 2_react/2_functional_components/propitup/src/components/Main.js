import React from 'react';

const Main = (props) => {
    const {name, age, hairColor} = props;


    return(
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>

    )
}
export default Main;