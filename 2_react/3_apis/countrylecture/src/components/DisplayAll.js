import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const DisplayAll = (props) => {

    const {countryList, setCountryList} = props;
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const ratingHandler = (e, country) => {
        country.rating = e.target.valueAsNumber;
        setRating(e.target.valueAsNumber);
        setCountryList([...countryList, country]);
    }
    const reviewHandler = (e, country) => {
        country.review = e.target.value;
        setReview(e.target.value);
        setCountryList([...countryList, country]);
    }

    return(
        <div style={{display:"flex", flexWrap: "wrap"}}>

            {
                countryList.map((country, index) =>(
                    <div style={{border:'5px solid red'}} key={index}>
                        <p>{country.name}</p>
                        <label htmlFor="rating">Leave A Rating</label>
                        <input type="number" onChange={(e) => ratingHandler(e, country)}/>
                        <br/>
                        {
                            country.rating?
                            <div>
                                <label htmlFor="review">Leave A Review (Optional):</label>
                                <textarea type="text" onChange={(e) => reviewHandler(e, country)}>

                                </textarea>
                            </div>
                            :null
                        }
                        <p>{country.alpha2Code}</p>
                        <p>{country.population}</p>
                        <img style={{width:"60px"}} src={country.flag} alt="Country Flag"/>
                    </div>
                ))
            }

        </div>
    )
}
export default DisplayAll;