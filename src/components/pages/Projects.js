import React from 'react';
import {Container} from 'react-bootstrap';
import ProjectOverview from './ProjectOverview';

class Projects extends React.Component {
    render() {
        return (
            <Container className="projects-container" style={{marginBottom: 75}}>
                <div className="projects-header">
                    Projects
                </div> 
                <hr className="hline" />
                <ProjectOverview
                    title="NBA RankSVM"
                    year="2018"
                    description="Used the sklearn Python library to evaluate the effectiveness
                            of using an SVM-based model in predicting NBA team standings based 
                            on raw team statistics. Built as the final project for the class,
                            CIS519: Applied Machine Learning, at the University of Pennsylvania."
                    github="https://github.com/jonatlee/nba-ranksvm"
                    />
                <hr />
                <ProjectOverview
                    title="Flexbox Calculator"
                    year="2018"
                    description="Created a basic scientific calculator
                            using CSS flexbox. Supports up to
                            10 digits of precision."
                    github="https://github.com/jonatlee/flexbox-calculator"
                    />
                <hr />
                {/* <Container className="projects-container" style={{marginBottom: 0}}>
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
                        <Col className="col-compressed">
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
                                    <Button className="projects-proj-langs-btn off nline fast" disabled>
                                        JavaScript
                                    </Button> 
                                </div>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="row-rem-spacing" style={{paddingTop: 0, paddingBottom: 20}}>
                        <Col>
                            <Container 
                                className="projects-proj"
                                onClick={() => this.onClick("sidestepper-game")}> 
                                <Row>
                                    <div className="projects-proj-name">
                                        SideStepper Game
                                    </div>
                                    <div className="projects-proj-name">
                                        2018 - present
                                    </div>
                                </Row>
                                <div className="projects-proj-desc">
                                    Basic platformer dodging game using Java Swing GUI.
                                </div>
                                <br />
                                <div className="projects-proj-langs">
                                    <Button className="projects-proj-langs-btn" disabled>
                                        Java
                                    </Button> 
                                </div>
                            </Container>
                        </Col>
                        <Col className="col-compressed">
                            <Container 
                                className="projects-proj"
                                onClick={() => this.onClick("text-rpg-game")}>
                                <div className="projects-proj-name">
                                    Zyphel
                                </div>
                                <div className="projects-proj-desc">
                                    An object-oriented based text RPG game.
                                </div>
                                <br />
                                <br />
                                <div className="projects-proj-langs">
                                    <Button className="projects-proj-langs-btn" disabled>
                                        C++
                                    </Button> 
                                    <Button className="projects-proj-dev-btn off nline slow" variant="secondary" disabled>
                                        In Development
                                    </Button>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container> */}
            </Container> 
        );
    }
}

export default Projects;