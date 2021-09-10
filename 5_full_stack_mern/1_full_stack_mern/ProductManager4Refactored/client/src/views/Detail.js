import React, {useEffect, useState} from "react";
import DeleteProduct from "../components/DeleteProduct";
import { Link, navigate } from "@reach/router";

import axios from "axios";
const Detail = (props) => {
    const {id} = props;

    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setOneProduct(res.data)
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <div style={{border:"2px solid black"}}>
            <h1>Title: {oneProduct.title}</h1>
            <h4>Price: {oneProduct.price}</h4>
            <h4>Description: {oneProduct.description}</h4>
            <DeleteProduct id={oneProduct._id}/>
        </div>
    )
}
export default Detail;
