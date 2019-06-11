import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Row className="row">
                    <Col className="col-left">
                        <Image
                            className="image-prof"
                            src={require("../../assets/images/stock.jpg")}
                            roundedCircle
                            style={{border: "2px solid #505050"}}
                            />
                    </Col>
                    <Col className="col-right">
                        <div className="desc-container">
                            <div className="desc-head">
                                Jonathan Lee
                            </div>
                            <div className="desc-text">
                                is a rising junior at the University of Pennsylvania
                                studying computer science. He is currently working
                                as a software engineering intern at Visa. 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
