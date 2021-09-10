import React, {useEffect, useState} from 'react';
import DeleteProduct from './DeleteProduct';
import { Link } from '@reach/router';
import axios from 'axios';


const ProductList = (props) => {

    const {productList, setProductList} = props;

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products`)
            .then((res) => {
                console.log(res.data);
                setProductList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div className="background">
            {
                productList?
                productList.map((product, idx) => (
                    <div key={idx} style={{border:"2px solid black"}}>
                        <Link to={`/product/${product._id}`}>
                        <p>Title: {product.title}</p>
                        </Link>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}</p>
                        <Link to={`/product/${product._id}/edit`}>Edit</Link>
                        <DeleteProduct productList={productList} setProductList={setProductList} id={product._id}/>
                    </div>
                ))
                :null
            }
            </div>
        </div>
    )
}
export default ProductList;