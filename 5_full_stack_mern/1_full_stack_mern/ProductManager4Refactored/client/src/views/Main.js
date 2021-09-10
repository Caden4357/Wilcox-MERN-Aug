import React, {useEffect, useState} from 'react';
import ProductList from '../components/ProductList';
import axios from "axios"

const Main = (props) => {
    const [productList, setProductList] = useState([]);
    const [newProduct, setNewProduct] = useState({});
    
        
    return (
        <div>
            <hr/>
            <ProductList productList={productList} setProductList={setProductList}/>
        </div>
    )
}
export default Main;