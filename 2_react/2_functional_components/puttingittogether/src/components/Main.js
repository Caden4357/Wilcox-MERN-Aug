import React, {useState} from 'react';

const Main = (props) => {
    const {name, age, hairColor} = props;
    const [ currentAge, setCurrentAge ] = useState(props.initialAge); 
    const handleClick = () => setCurrentAge(currentAge + 1)


    return(
        <div>
            <h1>{name}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday Button</button>
        </div>

    )
}
export default Main;