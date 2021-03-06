import React, {useEffect, useState} from 'react';
import PersonList from '../components/PersonList';
import {Router} from "@reach/router";
import axios from "axios"
import PersonForm from '../components/PersonForm';

const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            });
    }, [])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }
    return (
        <div>
            <PersonForm/>
            <hr/>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;