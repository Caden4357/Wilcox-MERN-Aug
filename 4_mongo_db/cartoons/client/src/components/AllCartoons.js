import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteCartoon from "./DeleteCartoon";
const AllCartoons = (props) => {
    const [cartoonList, setCartoonList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/allCartoons')
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
                        <div className="listItem" key={idx }>
                            <Link to={`/cartoon/${cartoon._id}`}>
                            <p>{cartoon.name}</p>
                            <img src={cartoon.image} alt="cartoon" style={{width:"200px", height:"200px"}}/>
                            </Link>
                            <Link to={`/cartoon/edit/${cartoon._id}`}>
                                Edit
                            </Link>
                            <Link to={`/user/profile/${cartoon.user_id._id}`}>
                                <p>Added By: {cartoon.user_id?.username}</p>
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