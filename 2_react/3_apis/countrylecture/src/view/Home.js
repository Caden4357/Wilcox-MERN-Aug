import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import DisplayAll from '../components/DisplayAll';


const Home = (props) => {

    const [countryList, setCountryList] = useState([]);

    return(
        <div>
            <Form countryList={countryList} setCountryList={setCountryList}/>
            <DisplayAll countryList={countryList} setCountryList={setCountryList}/>
        </div>
    )
}
export default Home;