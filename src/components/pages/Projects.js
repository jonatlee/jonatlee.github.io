import React from 'react';
import {Container} from 'react-bootstrap';

class Projects extends React.Component {
    render() {
        return (
            <Container>
                <div className="project-header">
                    Projects
                </div> 
                <hr className="hline" />
            </Container> 
        );
    }
}

export default Projects;