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
                    <Col className="abt-left-col" xs={7}>
                        <div className="about-text p1"> 
                            Hey, I'm Jonathan Lee, a rising third-year engineering 
                            student studying computer science
                            at the University of Pennsylvania.
                            Currently, I am working as a Software Engineering Intern 
                            on the DevOps team at Visa. 
                        </div> 
                        <div className="about-text px">
                            I am currently interested in pursuing a career involving web/app development 
                            and/or machine learning.
                            Aside from these topics, I am open to learning about other computer science 
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