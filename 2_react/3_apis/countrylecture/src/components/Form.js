import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Form = (props) => {

    const {countryList, setCountryList} = props;
    const [regionSelector, setRegionSelector] = useState("");



    const submitHandler = (e) =>{
        e.preventDefault();
        
        axios.get(`https://restcountries.eu/rest/v2/region/${regionSelector}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setCountryList(res.data);
        })
        .catch((err) => console.log(err))

    }



    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="regionSelector">Country Region</label>
                <select onChange={(e) => setRegionSelector(e.target.value)} name="regionSelector">
                    <option value="none" selected hidden>Select..</option>
                    <option value="Africa" name="regionSelector">Africa</option>
                    <option value="Americas" name="regionSelector">Americas</option>
                    <option value="Asia" name="regionSelector">Asia</option>
                    <option value="Europe" name="regionSelector">Europe</option>
                    <option value="Oceania" name="regionSelector">Oceania</option>
                </select>
                <button>Show Countries</button>
            </form>

        </div>
    )
}
export default Form;
