import React from 'react';
import Container from 'react-bootstrap/Container'
import { Link } from '@reach/router'
const FrontPage = (props) => {


    return (
            <div>
                <div className="flex">
                    <div className="flex_column1">
                    <video className="flex_column1_video" muted loop="true" autoPlay="true" >
                        <source src="./Videos/video1.mp4" type="video/mp4"/>
                    </video>
                    <Link className="link_from_front_page" to="/pageTwo">
                    <div className="flex_column1_content">
                        <div className="flex_column1_content-text">
                            <h1>DIET &<br/>FITNESS<br/>PLANS</h1>
                        </div>  
                    </div>
                    </Link>
                    </div>
                    <div className="flex_column2" style={{backgroundImage: "url(/images/front-page.jpg)", backgroundSize: "cover", backgroundPosition: "center center"}}>
                    <Link className="link_from_front_page" to="/">
                        <div className="flex_column2_content">
                            <div className="flex_column2_content-text">
                                <h1>SHOP</h1>
                            </div>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
    )
}
export default FrontPage;