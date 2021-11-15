import React, { useState , useEffect} from 'react';
import axios from 'axios';

const User = () => {
    const [userList, setUserList] = useState([]);
    const [newUser, setNewUser] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then((res) => {
            console.log(res.data);
            setUserList(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);
        axios.post('http://localhost:8000/users/add/', formData,)
            .then(res => {
                console.log(newUser.photo);
                // console.log(res.data);

            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        console.log(e.target.files);
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <div>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
            />

            <input 
                type="date"
                name="birthdate"
                value={newUser.date}
                onChange={handleChange}
            />

            <input 
                type="submit"
            />
        </form>
        {
            userList.map((user, idx) => (
                <div>
                    <p>{user.name}</p>
                    <img src={user.photo} alt="user-photo" style={{width:"200px", height:"200px"}}/>
                </div>
            ))
        }
        </div>
    );
}

export default User;