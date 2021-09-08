import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const ProductList = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => setProduct(res.data));
    }, [])
    return (
        <div>
            {props.product.map((product, id) => {
                return <p key={id}><Link to={"/" + product._id}>Title: {product.title}</Link>, Price: ${product.price}, Description: {product.description} </p>
            })}
        </div>
    )
}
export default ProductList;