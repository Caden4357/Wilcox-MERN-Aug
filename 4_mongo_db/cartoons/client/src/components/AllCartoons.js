import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteCartoon from "./DeleteCartoon";

const AllCartoons = (props) => {
    const [cartoonList, setCartoonList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/cartoons')
            .then((res) => {
                console.log(res.data);
                setCartoonList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h1>All Cartoons</h1>
            <div>
                {
                    cartoonList.map((cartoon, idx) => (
                        <div style={{border:"4px solid red", padding:"50px", borderRadius:"100px"}} key={idx }>
                            <Link to={`/cartoon/${cartoon._id}`}>
                            <p>{cartoon.name}</p>
                            <img src={cartoon.image} alt="cartoon" style={{width:"200px", height:"200px"}}/>
                            </Link>
                            <DeleteCartoon cartoonList={cartoonList} setCartoonList={setCartoonList} id={cartoon._id}/>
                        </div> 
                    ))
                }
            </div>
        </div>
    )
}
export default AllCartoons;