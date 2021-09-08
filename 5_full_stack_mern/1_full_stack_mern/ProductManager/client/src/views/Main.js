import React, {useEffect, useState} from 'react';
import CreateProduct from '../components/CreateProduct';
import axios from 'axios';

const Main = () => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => console.log(res.data));
    }, [])

    return (
        <div>
            <CreateProduct/>
        </div>
    )
}
export default Main;