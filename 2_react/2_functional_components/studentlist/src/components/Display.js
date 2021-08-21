import React, {useState} from "react";

const Display = (props) =>{
    const {studentList} = props;


    return(
        <div>
            <div> 
                <div>
                    <table>
                        <tr>
                            <th>Firstname</th>
                            <th>Favorite Stack</th>
                            <th>Tall Club</th>
                        </tr>
                        {
                        studentList.map((student, idx) =>(
                        <tr key={idx}>
                            <td>{student.name}</td>
                            <td>{student.favStack}</td>
                            {
                                student.tallClub == true?
                                <td>Member of the tall club</td>
                                :<td>Shorty!</td>
                            }
                        </tr>
                    ))
                    }
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Display;