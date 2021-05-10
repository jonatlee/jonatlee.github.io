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
                    title="Lyricio"
                    year="2021"
                    description="A web application for exploring the relationships
                                between Spotify tracks and lyrics of those songs.
                                Built with a React front end, Node/Express back end,
                                and AWS RDS Oracle Database. Hosted the application on
                                an AWS EC2 instance."
                    />
                <hr />
                <ProjectOverview
                    title="ClassicaConnect"
                    year="2021"
                    description="Social network for classical musicians built using Ruby-on-Rails,
                                 Spotify API, and AWS S3."
                    />
                <hr />
                <ProjectOverview
                    title="PLANNtER"
                    year="2020-2021"
                    description="Web application for planning and visualizing 
                                gardens, connecting with other users on the platform,
                                and organizing miscellaneous gardening tasks. Developed
                                using the MERN stack and AWS 
                                as a senior capstone group project."
                    />
                <hr />
                <ProjectOverview
                    title="PennCloud"
                    year="2020"
                    description="Cloud service developed in C/C++, featuring
                                Gmail and Dropbox application clones,
                                load-balanced front end servers,
                                and a distributed key-value store with a master node.
                                Implemented the functionality, fault tolerance, 
                                primary-backup replication,
                                and logging / recovery of the back end servers, as well
                                as the master node logic."
                    />
                <hr />
                <ProjectOverview
                    title="Analysis of Car Accidents in the US"
                    year="2020"
                    description="Using Python, performed EDA on a Kaggle dataset
                                consisting of car accident data in the US, 
                                identifying trends between severity and environmental factors
                                such as precipitation, humidity, and the time
                                of day. Built a classifier to predict the 
                                severity of an accident given such input factors."
                    />
                <hr />
                <ProjectOverview
                    title="CHIP-8 Emulator"
                    year="2020"
                    description="Built a CHIP-8 emulator using C++ alongside a colleague. 
                                Implemented the processor logic."
                    />
                <hr />
                <ProjectOverview
                    title="PennOS"
                    year="2019"
                    description="Unix-based operating system built in C,
                                featuring a kernel scheduler, FAT file system,
                                and a user-facing shell. Led development
                                of the scheduler, and assisted in implementing the
                                shell functions."
                    />
                <hr />
                <ProjectOverview
                    title="SplitMe"
                    year="2019"
                    description="Led front end development (React-Native/Redux) 
                                for a group payment mobile application developed among peers."
                    />
                <hr />
                <ProjectOverview
                    title="TutorConnect"
                    year="2019"
                    description="Developed a social network for matching tutors and tutees
                                for Android using XML, Java, and MongoDB. 
                                Additionally, implemented an admin webpage using
                                embedded JavaScript and Node Express."
                    />
                <hr />
                <ProjectOverview
                    title="NBA Playoff Predictor"
                    year="2019"
                    description="Created a command-line application using Java
                                and TwitterAPI that predicts
                                NBA playoff match outcomes based on the frequency
                                of Tweets the day prior."
                    />
                <hr />
                <ProjectOverview
                    title="NBA RankSVM"
                    year="2018"
                    description="Used the sklearn Python library to evaluate the effectiveness
                            of using an SVM-based model in predicting NBA team standings based 
                            on raw team statistics."
                    github="https://github.com/jonatlee/nba-ranksvm"
                    />
                <hr />
                <ProjectOverview
                    title="Flexbox Calculator"
                    year="2018"
                    description="Created a basic scientific calculator
                            using HTML, CSS flexbox, and JavaScript. Supports up to
                            10 digits of precision."
                    github="https://github.com/jonatlee/flexbox-calculator"
                    />
                <hr />
                <ProjectOverview
                    title="SideStepper Game"
                    year="2017"
                    description="Built a dodging-based platformer using Java Swing."
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