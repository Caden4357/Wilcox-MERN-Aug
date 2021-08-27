import React, {useState} from 'react';

const Form = (props) => {

    const [color, setColor] = useState("");
    const [dimensions, setDimenstions] = useState(50);

    const {boxColorArray, setBoxColorArray} = props;

    const submitHandler = (e) => {
        e.preventDefault();

        setBoxColorArray([...boxColorArray, {
            color: color,
            dimensions: dimensions + "px"
        }]);

        setColor("");
        setDimenstions(50);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="color">Color: </label>
                    <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                    <br/>
                    <label htmlFor="dimensions">Add Width and height in px auto is 50px: </label>
                    <input type="text" name="dimensions" value={dimensions} onChange={(e) => setDimenstions(e.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}
export default Form;