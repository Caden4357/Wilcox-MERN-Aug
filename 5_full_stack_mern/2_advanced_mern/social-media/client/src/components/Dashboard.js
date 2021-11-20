import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from '@reach/router';

const Dashboard = (props) => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/dashboard')
            .then((res) => {
                console.log(res.data);
                setUserList(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>All Users</h1>
            <div>
                {
                    userList.map((user, idx) => (
                        <div>
                            <p>User {user.firstName}</p>
                            <img className="w-54 h-36 mx-auto my-2 rounded-3xl"
                            src={`http://localhost:8000/image/${user.profilePicture}`} 
                            alt="Add a profile picture!"/>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Dashboard;