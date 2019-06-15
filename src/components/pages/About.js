import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <Container>
                <div className="about-header">
                    About Me 
                </div> 
                <hr className="hline" />
                <Row style={{marginTop: "0"}}>
                    <Col xs={7}>
                        <div className="about-text p1"> 
                            Hey, I'm Jonathan Lee, a rising third-year engineering 
                            student studying computer science
                            at the University of Pennsylvania.
                            Currently, I am working as a Software Engineering Intern 
                            on the DevOps team at Visa. 
                        </div> 
                        <div className="about-text px">
                            I am interested in web development, algorithms, machine learning,
                            and am open to learning about other topics in computer
                            science as well. Outside of work, I am a classically trained clarinetist, 
                            proficient binge-watcher, video game enthusiast, 
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