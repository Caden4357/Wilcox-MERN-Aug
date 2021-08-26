import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Form = (props) => {

    const {countryList, setCountryList} = props;
    const [regionSelector, setRegionSelector] = useState("");


    axios.get(`https://restcountries.eu/rest/v2/region/${regionSelector}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setCountryList(res.data);
        })
        .catch((err) => console.log(err))




    return(
        <div>

            <label htmlFor="regionSelector">Country Region</label>
            <select onChange={(e) => setRegionSelector(e.target.value)} name="regionSelector">

                <option value="none" selected hidden>Select..</option>
            </select>

        </div>
    )
}