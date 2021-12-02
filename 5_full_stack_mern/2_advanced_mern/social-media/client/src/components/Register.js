import React, {useState} from "react";
import axios from 'axios';


const Register = (props) => {
    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});

    //using one piece of state to hold all the data for our new user 
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    // using a single function to update state 
    //were using the inputs name attribute as the to the the object and getting the value 
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/user/register`, 
        user, //the user state is already set by this point to the correct keys and values
        {  
            //this will force the sending of the credentials / cookies so they can be updated 
            // XMLHttpRequest from a different domain cannot set cookie values for their own domain 
            // unless withCredentials is set to true before making the request 
            withCredentials: true,
        })
        .then(res => {
            console.log(res.data);

            setUser({
                firstName: "",
                lastName: "",
                username: "",
                img: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            setConfirmReg("Thank you for registering please log in");
            setErrors({});
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div className="container">
            {/* <h1>Register</h1>
            {
                confirmReg?
                <h4 style={{color: "green"}}>{confirmReg}</h4>
                :null
            } */}
            {/* <div className="login-form">
                <form onSubmit={register} encType='multipart/form-data'>
                <div>
                        <label>First Name:</label>
                        {
                            errors.firstName?
                            <span style={{color: "red"}}>{errors.firstName.message}</span>
                            :null
                        }
                        <input type="text" name="firstName" value={user.firstName} onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        {
                            errors.lastName?
                            <span style={{color: "red"}}>{errors.lastName.message}</span>
                            :null
                        }
                        <input type="text" name="lastName" value={user.lastName} onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Username:</label>
                        {
                            errors.username?
                            <span style={{color: "red"}}>{errors.username.message}</span>
                            :null
                        }
                        <input type="text" name="username" value={user.username} onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        {
                            errors.email?
                            <span style={{color: "red"}}>{errors.email.message}</span>
                            :null
                        }
                        <input type="text" name="email" value={user.email} onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        {
                            errors.password?
                            <span style={{color: "red"}}>{errors.password.message}</span>
                            :null
                        }
                        <input type="password" name="password" value={user.password} onChange={(e) => handleChange(e)}/>
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        {
                            errors.confirmPassword?
                            <span style={{color: "red"}}>{errors.confirmPassword.message}</span>
                            :null
                        }
                        <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={(e) => handleChange(e)}/>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div> */}
        </div>
    )
}
export default Register;