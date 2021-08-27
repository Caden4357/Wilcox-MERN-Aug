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

    const propsHandler = (country) => {
        if(country.rating && country.review){
            return(
                <Link to={`/country/${country.alpha2Code}/${country.rating}/${country.review}`}><p>{country.name}</p></Link>
            )}
        else if(country.rating){
            return(
                <Link to={`/country/${country.alpha2Code}/${country.rating}`}><p>{country.name}</p></Link>
            )}
        else{
            return (
                <Link to={`/country/${country.alpha2Code}`}><p>{country.name}</p></Link>
            )
        }
    }

    return(
        <div style={{display:"flex", flexWrap: "wrap"}}>

            {
                countryList.map((country, index) =>(
                    <div style={{border:'2px solid red', padding: '5px', margin: '4px'}} key={index}>

                        {
                            propsHandler(country)
                        }
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