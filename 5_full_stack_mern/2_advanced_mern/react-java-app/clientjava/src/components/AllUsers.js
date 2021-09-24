import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import Delete from './Delete';


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

    
    const deleteFilter = (id) => {
        let newList = personList.filter((person) => person.id !== id);
        setPersonList(newList);
    }


    return (
        <div>
            <h1>Welcome</h1>
            {
                personList.map((person, idx) => (
                <div key={idx}>
                    <p>Name: {person.name}</p>
                    <p>Age: {person.age}</p>
                    <Link to={`/editPerson/${person.id}`}>Edit</Link>
                    <Delete personList={personList} setPersonList={setPersonList} id={person.id} deleteFilter={deleteFilter}/>
                </div>
                ))
            }
            <Link to="/create/person">Create A New User</Link>
        </div>
    )
}
export default AllUsers;