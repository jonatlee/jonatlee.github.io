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
                                SWE Intern @ Visa | Rising Junior @ UPenn
                            </div>
                        </div>
                        <div className="links-container">
                            <a href="mailto:jonathanlee4577@gmail.com">
                                <i className="fas fa-envelope-square fa-3x"></i>
                            </a>
                            <a href="https://github.com/jonatlee">
                                <i className="fab fa-github-square fa-3x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jonathan-lee-807ba8159">
                                <i className="fab fa-linkedin fa-3x"></i>
                            </a>
                        </div> 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
