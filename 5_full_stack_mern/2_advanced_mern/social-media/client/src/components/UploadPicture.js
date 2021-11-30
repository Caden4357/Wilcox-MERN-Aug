import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const UploadPicture = (props)=> {
    // storing the uploaded file 
    const [file, setFile] = useState('');   
    // storing the recived file from backend
    const [data, getData] = useState({ name: "", path: "" });    
    const profilePicture = useRef(); // accesing input element
    const {setCurrentUser, currentUser, currentId, userProfile } = props;
    const [changePic, setChangePic] = useState({
        ...currentUser,
        profilePicture:""
    })


    const handleInputChange = (e) => {
        // setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
        console.log(e.target.name, e.target.files[0]);
        setChangePic({
            ...currentUser,
            // [e.target.name]:e.target.files[0],
            [e.target.name]:e.target.files[0].name,
        });
    }

    const uploadFile = () => {
        const formData = new FormData();        
        formData.append('file', file); // appending file
        axios.put('http://localhost:8000/api/user/upload/' + currentId, formData, {
            withCredentials:true
        })
        .then(res => {
            console.log(res.data);
            getData({ name: res.data.name,
                path: 'http://localhost:8000/public/' + res.data.path
            })
            // setChangePic({
            //     ...currentUser,
            //     profilePicture: 'http://localhost:8000/' + res.data.path
            // })
            // setCurrentUser({
            //     ...currentUser,
            //     profilePicture: 'http://localhost:8000/' + res.data.path
            // })
            console.log(res.data.path);
            console.log(currentUser);
        })
        .catch(err => console.log(err))
    
    }


    return (

    <div>

        
        {/* <img
        src={`http://localhost:8000/image/${currentUser.profilePicture}`} 
        alt="Add a profile picture!"/> */}

        <div>

            <div>
            
                <input type="text" placeholder="Change Picture" />

                <input ref={profilePicture} 
                type="file" name="profilePicture"  
                onChange={handleInputChange}/>  

                <button 
                onClick={uploadFile}>               
                Upload
                </button> 
            </div>
    </div> 
</div>

)}

export default UploadPicture;