import React, {useState} from "react";

const Display = (props) =>{
    const {studentList, setStudentList} = props;

    const handleDeleteStudent = (studentNameToDelete) => {
        console.log(studentNameToDelete);
        setStudentList(studentList.filter((student) =>{
            return student.name !== studentNameToDelete;
        }))
    }


    return(
        <div>
            <h2>Roster:</h2>
                <div style={{display:"flex"}}>
                    {
                    studentList.map((student, idx) =>(
                        <div key={idx} style={{display:"flex", flexDirection:"column", padding:"10px", border:"3px solid black", margin:"5px"}}>
                            <p>Name: {student.name}</p>
                            <p>Favorite Stack:{student.favStack}</p>
                        {
                            student.tallClub === true?
                            <p>Member of the tall club</p>
                            :<p>Shorty!</p>
                        }
                            <button onClick={() => handleDeleteStudent(student.name)}>Delete</button>
                        </div>
                    ))
                }
                </div>
        </div>
    )
}
export default Display;