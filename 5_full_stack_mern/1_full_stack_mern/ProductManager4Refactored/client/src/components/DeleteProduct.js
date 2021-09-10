import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const DeleteProduct = (props) => {
    const {id, productList, setProductList} = props;

    const deleteFilter = (id) => {
        let newList = productList.filter((product) => product._id !== id);
        setProductList(newList);
    }

    const deleteHandler = (e) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res.data);
                if(productList){
                    deleteFilter(id);
                }
                else{
                    navigate('/')
                }
                
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <button onClick={deleteHandler} style={{marginBottom:"15px"}}>Delete</button>
        </div>
    )
}
export default DeleteProduct;