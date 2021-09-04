import React, {useEffect, useState} from 'react';
import {Router} from "@reach/router";
import axios from "axios"
import PersonForm from '../components/PersonForm';

const Main = () => {
    const [message, setMesssage] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMesssage(res.data.message))
    }, []);

    return (
        <div>
            <Router>
            <PersonForm path="/api"/>
            </Router>
        </div>
    )
}
export default Main;