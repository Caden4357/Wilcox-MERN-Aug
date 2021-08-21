//importing react and useState hook from react 
import React, {useState} from 'react';

const Form = (props) => {
    //creating two variable that i can manipulate and use using the useState hook 
    const [name, setName] = useState("");
    const [favStack, setFavStack] = useState("");
    const [tallClub, setTallClub] = useState(false);
    const {studentList, setStudentList} = props;


    //handling when the user submits the form e.preventDefault(); just stops the browser from re rendering everytime we submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //cheking if the name is greater than 2 characters and returning before the setter for studentList runs so it doesnt get added 
        if(name.length < 2){
            alert("Name must be more then 2 characters");
            return;
        }

        setStudentList([...studentList, {
            name: name,
            favStack: favStack,
            tallClub: tallClub
        }])

        // this is clearing the checkbox after the submition of the form 
        setName("")
        setFavStack("")
    } 


    return (
        <div className="wrapper">
            <h1>Add A Student!</h1>
            {/* jsx form onSubmit is a synthetic event that triggers the function above */}
            <form onSubmit={handleSubmit}>
                {/* {
                    name.length > 0 && name.length < 3?
                    <span>Name must be atleast 3 characters long</span>
                    :null
                } */}
                {/* html for is just the jsx way of saying for="" in html because in jsx for is a key word for something else */}
                <label htmlFor="name">Name: </label>
                {/* this is saying when i trigger this synthetic event im gonna take the object e pass it through function and use the setter of setName to set that name to the value of the object which is just simply what the user wrote in the checkbox */}
                <input value={name} name="name" onChange={(e) => {
                    setName(e.target.value)}} type="text" />
                    {/* alternatively to the button we could just have an input type="submit" */}
                    {/* <input type="submit" value="Add Student"/> */}
                <label htmlFor="tallClub">Tall? (Over 6ft)</label>
                <input type="checkbox" value={tallClub} name="tallClub" onChange={(e) => setTallClub(!tallClub)} checked={tallClub}/>
                <button>Add Student</button>
            </form>
            <div>
                <label htmlFor="favStack">Whats your favorite stack?</label>
                <select value={favStack} name="favStack" onChange={(e) =>setFavStack(e.target.value)}>
                    <option default>Select...</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="MERN">MERN</option>
                </select>
            </div>
        </div>
    )

}
export default Form;
