import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class Home extends React.Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#F5F5F5";
    }

    render() {
        return (
            <Container className="wrapper">
                <Row className="row">
                    <Col className="col-left">
                        <Image
                            className="image-prof"
                            bsPrefix="border"
                            src={require("../../assets/images/stock.jpg")}
                            roundedCircle
                            />
                    </Col>
                    <Col className="col-right" xs={6}>
                        <div className="desc-container">
                            <div className="desc-head">
                                Hi, I'm Jonathan Lee.
                            </div>
                            <div className="desc-text">
                                Senior @ UPenn studying CS
                            </div>
                        </div>
                        <div className="links-container">
                            <a href="mailto:jonathanlee457@gmail.com">
                                <i className="email fas fa-envelope-square fa-3x"></i>
                            </a>
                            <a href="https://github.com/jonatlee" target="_blank">
                                <i className="github github-home fab fa-github-square fa-3x"></i>
                            </a>
                        </div> 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
