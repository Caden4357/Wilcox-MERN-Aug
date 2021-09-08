import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const PersonList = (props) => {
    const { removeFromDom } = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/user/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
    }
    return (
        <div>
            {props.people.map((person, idx)=>{
                return <p key={idx}>{person.lastName}, {person.firstName}
                <Link to={"/user/" + person._id + "/edit"}>
                    Edit
                </Link>
                | 
                <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                </button>
                </p>
            })}
        </div>
    )
}
export default PersonList;