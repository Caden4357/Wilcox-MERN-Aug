import React from 'react';

const Form = (props) => {

    const {submitHandler, player, setPlayer, errors} = props;

    const inputHandler = (e) => {
        let newStateObject = {...player};
        newStateObject[e.target.name] = e.target.value;
        setPlayer(newStateObject)
    }

    return (
        <div className="game">
            <h1>Add A Player</h1>
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" value={player.name} name="name" onChange={inputHandler}/>
                {
                    errors.name?
                    <span style={{color:"red"}}>{errors.name.message}</span>
                    :null
                }
                <br/>
                <label>Position:</label>
                <input style={{marginTop:"20px"}} type="text" value={player.position} name="position" onChange={inputHandler}/>
                <br/>
                <button style={{marginTop:"20px", marginBottom:"20px", color:"white", backgroundColor:"green"}}>Add Player</button>
            </form>
        </div>
    )
}
export default Form;