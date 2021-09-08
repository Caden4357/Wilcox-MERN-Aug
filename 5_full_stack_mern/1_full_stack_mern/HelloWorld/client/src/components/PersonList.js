import React from 'react'
const PersonList = (props) => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return <p key={idx}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}
export default PersonList;