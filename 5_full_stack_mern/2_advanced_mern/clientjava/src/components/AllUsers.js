import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const AllUsers = (props) =>{
    const [personList, setPersonList] = useState([]);

    
    useEffect(()=> {
    axios.get('http://localhost:8080/getAllPeople')
        .then((res) => {
        console.log(res.data);
        setPersonList(res.data);
        })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <h1>Welcome</h1>
            {
                personList.map((person, idx) => (
                <div key={idx}>
                    <p>Name: {person.name}</p>
                    <p>Age: {person.age}</p>
                </div>
                ))
            }
            <Link to="/create/person">Create A New User</Link>
        </div>
    )
}
export default AllUsers;