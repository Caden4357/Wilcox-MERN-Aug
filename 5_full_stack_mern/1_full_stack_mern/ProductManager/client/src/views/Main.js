import React, {useEffect, useState} from 'react';
import CreateProduct from '../components/CreateProduct';
import ProductList from '../components/ProductList';
import axios from "axios"

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true); 
            });
    }, [])
    return (
        <div>
            <CreateProduct/>
            <hr/>
            {loaded && <ProductList product={product}/>}
        </div>
    )
}
export default Main;