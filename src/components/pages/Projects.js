import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

class Projects extends React.Component {
    onClick = (projName) => {
        window.location = `https://github.com/jonatlee/${projName}`;
    }

    render() {
        return (
            <Container style={{marginBottom: 75}}>
                <div className="project-header">
                    Projects
                </div> 
                <hr className="hline" />
                <Container className="projects-container" style={{marginBottom: 0}}>
                    <Row style={{paddingBottom: 0}}>
                        <Col>
                            <Container 
                                className="projects-proj" 
                                onClick={() => this.onClick("nba-ranksvm")}
                                >
                                <div className="projects-proj-name">
                                    NBA RankSVM
                                </div>
                                <div className="projects-proj-desc">
                                    Implemented RankSVM learning algorithm 
                                    to predict NBA team standings based on raw team statistics, such
                                    as points, assists, and rebounds.
                                </div>
                                <div className="projects-proj-langs">
                                    <Button className="projects-proj-langs-btn" disabled>
                                        Python
                                    </Button> 
                                </div>
                            </Container>
                        </Col>
                        <Col>
                            <Container 
                                className="projects-proj"
                                onClick={() => this.onClick("flexbox-calculator")}>
                                <div className="projects-proj-name">
                                    Flexbox Calculator
                                </div>
                                <div className="projects-proj-desc">
                                    Created a basic scientific calculator
                                    using CSS flexbox. Supports up to
                                    10 digits of precision.
                                </div>
                                <br />
                                <div className="projects-proj-langs">
                                    <Button className="projects-proj-langs-btn" disabled>
                                        HTML
                                    </Button> 
                                    <Button className="projects-proj-langs-btn off" disabled>
                                        CSS
                                    </Button> 
                                    <Button className="projects-proj-langs-btn off" disabled>
                                        JavaScript
                                    </Button> 
                                </div>
                            </Container>
                        </Col>
                    </Row>
                    <Row style={{paddingTop: 0, paddingBottom: 20}}>
                        <Col>
                            <Container 
                                className="projects-proj"
                                onClick={() => this.onClick("sidestepper-game")}> 
                                <div className="projects-proj-name">
                                    SideStepper Game
                                </div>
                                <div className="projects-proj-desc">
                                    Used Java Swing GUI to create a basic sidestepper game where 
                                    the player avoids falling anvils and collects coins to score.
                                </div>
                                <br />
                                <div className="projects-proj-langs">
                                    <Button className="projects-proj-langs-btn" disabled>
                                        Java
                                    </Button> 
                                </div>
                            </Container>
                        </Col>
                        <Col>
                            <Container 
                                className="projects-proj"
                                onClick={() => this.onClick("text-rpg-game")}>
                                <div className="projects-proj-name">
                                    Zyphel
                                </div>
                                <div className="projects-proj-desc">
                                    A text RPG game that I am currently developing.
                                </div>
                                <br />
                                <br />
                                <div className="projects-proj-langs">
                                    <Button className="projects-proj-langs-btn" disabled>
                                        C++
                                    </Button> 
                                    <Button className="projects-proj-langs-btn off" disabled>
                                        Still Being Developed
                                    </Button> 
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container> 
        );
    }
}

export default Projects;