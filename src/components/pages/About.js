import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Container className="about-container">
                <div className="about-header">
                    About Me 
                </div> 
                <hr className="hline" />
                <Row style={{marginTop: "0"}}>
                    <Col className="abt-left-col" xs={8}>
                        <div className="about-text p1"> 
                            Hey, I'm Jonathan Lee, a senior in 
                            engineering pursuing a Bachelor's
                            and Master's degree in computer science
                            at the University of Pennsylvania.
                            Recently, I was a SWE intern at MongoDB, working on the
                            Cloud Developer Productivity team. 
                        </div> 
                        <div className="about-text px">
                            I am currently interested in and have experience working with
                            full-stack development, DevOps, machine learning, and
                            distributed systems. Aside from these topics, 
                            I am open to learning about other computer science 
                            specializations. Outside of work, I am an amateur clarinetist, 
                            veteran binge-watcher, video game enthusiast, 
                            and superfan of the Philadelphia 76ers basketball team. 
                        </div>
                    </Col>
                    <Col>
                        <Image
                            className="image-abt"
                            src={require("../../assets/images/about.jpg")}
                            roundedCircle
                            />
                    </Col> 
                </Row>
            </Container> 
        );
    }
}

export default About;