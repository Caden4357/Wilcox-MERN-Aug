import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from '@reach/router';
import UploadPicture from "./UploadPicture";

const Dashboard = (props) => {
    const [userList, setUserList] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);
    const {currentId, setCurrentId} = props;
    useEffect(() => {
        axios.get(`http://localhost:8000/currentUser/${currentId}`)
        .then((res) => {
            console.log(res.data);
            setCurrentUser(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
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
    
    const logout = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/logout", { 
            // no body required for this request
        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/login");
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div className="container">
            <h1>All Users</h1>
            <div>
                {
                    userList.map((user, idx) => (
                        <div>
                            <p>User {user.firstName}</p>
                            <img className="profile-pic"
                            src={`http://localhost:8000/image/${user.profilePicture}`} 
                            alt="Add a profile picture!"/>
                        </div>
                    ))
                }
            </div>
            <h1>User {currentUser.username}</h1>
            {/* <Link to={`/upload/${currentId}`}>Upload Photo</Link> */}
            <UploadPicture currentId={currentId}/>
            <button onClick={logout}>Logout / Home</button>
        </div>
    )
}
export default Dashboard;