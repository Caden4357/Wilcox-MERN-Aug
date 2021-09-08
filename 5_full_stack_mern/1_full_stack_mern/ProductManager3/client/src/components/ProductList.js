import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const ProductList = (props) => {
    // const [product, setProduct] = useState([]);
    // const { removeFromDom } = props;
    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    // }
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/products")
    //     .then(res => setProduct(res.data));
    // }, [])
    return (
        <div>
            {props.product.map((product, id) => {
                return <p key={id}><Link to={"/" + product._id}>Title: {product.title}</Link>, Price: ${product.price}, Description: {product.description} 
                <Link to={"/product/" + product._id + "/edit"}>
                    Edit
                </Link></p>
                // |
                // <button onClick={(e)=>{deleteProduct(product._id)}}>
                //     Delete
                // </button>
            })}
        </div>
    )
}
export default ProductList;