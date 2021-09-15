import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import DeleteAuthor from './DeleteAuthor';

const AllAuthors = (props) => {

    const {authorList, setAuthorList} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then((res) => {
                console.log(res.data);
                setAuthorList(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <table style={{border: "1px solid black", width:"50%", marginLeft:"auto", marginRight: "auto", marginTop:"100px"}}>
                <tr>
                    <th style={{border: "1px solid black"}}>Name</th>
                    <th style={{border: "1px solid black"}}>Action</th>
                </tr>
            {
                authorList?
                authorList.map((author, idx) => (
                <tr key={idx}>
                    <td style={{border: "1px solid black"}}><Link to={`author/${author._id}`}>{author.name}</Link></td>
                    <td style={{border: "1px solid black"}}>
                        <Link to={`author/edit/${author._id}`}>Edit</Link>
                        <DeleteAuthor authorList={authorList} setAuthorList={setAuthorList} id={author._id}/>
                    </td>
                </tr>
                ))
                :null
            }
            </table>
        </div>
    )
}
export default AllAuthors;