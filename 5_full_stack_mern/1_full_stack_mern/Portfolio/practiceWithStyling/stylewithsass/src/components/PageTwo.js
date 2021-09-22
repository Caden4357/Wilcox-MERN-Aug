import React from 'react';
import { Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const PageTwo = (props) => {

    return (
        <div>
            <section className="home">
                <Container>
                    <div className="row align-items-center text-start" style={{height:"100vh"}}>
                        <div className="col-md-4">
                            <div className="display-1 fw-bolder" style={{color:"white"}}>
                                "Next 
                                <br/>
                                Stop Achieve!"
                            </div>
                        </div>
                    </div>
                    <Link className="link_from_main_page" to="/about">
                        <div className="flex_column3_content">
                            <div className="flex_column3_content-text">
                                <h1 className="click-here text-center">Click Here...</h1>
                            </div>
                        </div>
                    </Link>
                </Container>
            </section>
            <section className="about">
                <h1 className="display-4 text-center fw-bolder my-4 text-about">
                    About Us
                </h1>
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-xl-3 col-11 mb-3 py-4 px-4 shadow-lg bg-white card_background text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <h3 className="font-monospace">Who's The Owner</h3>
                            <p className="lead">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className="col-xl-3 col-11 mb-3 py-4 px-4 shadow-lg bg-white card_background text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <h3 className="font-monospace">Who's The Owner</h3>
                            <p className="lead">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default PageTwo;
