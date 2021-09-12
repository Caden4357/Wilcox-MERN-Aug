import React, {useEffect, useState} from 'react';
import AllAuthors from '../components/AllAuthors';

const Main = (props) => {

    const [authorList, setAuthorList] = useState([]);


    return (
        <div>
            <AllAuthors authorList={authorList} setAuthorList={setAuthorList}/>
        </div>
    )
}
export default Main;