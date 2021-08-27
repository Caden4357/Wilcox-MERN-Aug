import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import DisplayAll from '../components/DisplayAll';


const Home = (props) => {

    return(
        <div>
            <Form/>
            <DisplayAll/>
        </div>
    )
}
export default Home;