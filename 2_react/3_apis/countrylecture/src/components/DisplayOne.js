import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';




const DisplayOne = (props) => {

    const [country, setCountry] = useState({});
    const {rating, review} = props;

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${props.countryCode}`)
            .then((res) => {
                console.log(res, "Success");
                console.log(res.data);
                setCountry(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            {
                country[0]?
                <div>
                    <p>{country[0].name}</p>
                    <p>{country[0].population}</p>
                {
                    rating?
                    <p>Thank you for rating this country ({rating})</p>
                    :null
                }
                {
                    review?
                    <p>Your review: {review}</p>
                    :null
                }
                </div>
                :null
            }
        </div>
    )
}
export default DisplayOne;