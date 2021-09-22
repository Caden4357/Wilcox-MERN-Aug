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
                    <Row className="align-items-center text-start" style={{height:"100vh"}}>
                        <div className="col-md-4">
                            <div className="display-1 fw-bolder" style={{color:"white"}}>
                                Next Stop Achieve!
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default PageTwo;
