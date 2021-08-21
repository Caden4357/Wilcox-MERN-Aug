import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be longer than 2 characters");
        }else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be longer than 2 characters");
        }else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2){
            setEmailError("email must be longer than 2 characters");
        }else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be longer than 8 characters");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(password !== confirmPassword){
                setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }
    const createUser = (e) => {
        handleFirstName();
        handleLastName();
        handleEmail();
        handlePassword();
        handleConfirmPassword();

        e.preventDefault();
        
            const newUser = { firstName, lastName, email, password, confirmPassword };
            console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        };

        return(
            <div>
                <form onSubmit={ createUser }>
                    <div>
                        <label>First Name: </label> 
                        <input type="text" value={ firstName } onChange={ (e) => setFirstName(e.target.value), handleFirstName} />
    
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                    </div>
                    <div>
                        <label>Last Name: </label> 
                        <input type="text" value={ lastName } onChange={ (e) => setLastName(e.target.value), handleLastName} />
    
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                    </div>
                    <div>
                        <label>Email Address: </label> 
                        <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value), handleEmail}/>
                        {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="text" value={ password } onChange={ (e) => setPassword(e.target.value), handlePassword}/>
                        {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                {
                        password !== confirmPassword ?
                        <p>Passwords do not match</p>
                        : null 
                }
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="text" value={ confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value), handleConfirmPassword}/>
                    </div>
                    {
                        firstNameError ?
                        <input type="submit" value="Create User" disabled/> :
                        <input type="submit" value="Create User" /> 
                    }
    
                </form>
                <div>
                    <h3>Your Form Data</h3>
                    <p>
                        <label>First Name: </label>{ firstName }
                    </p>
                    <p>
                        <label>Last Name: </label>{ lastName }
                    </p>
                    <p>
                        <label>Email: </label>{ email }
                    </p>
                    <p>
                        <label>Password: </label>{ password }
                    </p>
                    <p>
                        <label>Confirm Password: </label>{ confirmPassword }
                    </p>
                </div>
            </div>

        )}
export default Form;