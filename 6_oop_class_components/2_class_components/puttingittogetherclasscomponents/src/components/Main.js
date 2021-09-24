import React, {Component} from 'react';

class Main   extends Component {

    constructor(props){
        super(props);

        this.state={
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor: this.props.hairColor
        }
    }
        render(){
            const {firstName, lastName, hairColor, age} = this.state


            return (
                <div>
                    <h1>First Name: {firstName}</h1>
                    <p>Last Name: {lastName}</p>
                    <p>Hair Color: {hairColor}</p>
                    <p>Age: {age}</p>
                    <button onClick={() => this.setState({age: this.state.age + 1}) }>Birthday Button</button>
                    <hr/>
                </div>
            )
        }
    }
export default Main;