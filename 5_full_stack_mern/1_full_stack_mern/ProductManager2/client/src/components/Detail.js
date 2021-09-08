import React, {useEffect, useState} from "react";
import axios from "axios";
const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}
export default Detail;
