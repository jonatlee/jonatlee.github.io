import React from 'react';
import {Container, Button, Image} from 'react-bootstrap';

class ProjectOverview extends React.Component {
    getButtons = () => {
        if (this.props.github) {
            if (this.props.course) {
                return (<div className="project-row" style={{marginTop: "2vh"}}>
                            <Button className="project-button" target="_blank" href={this.props.github}>See on GitHub</Button>
                            <Button variant="secondary" target="_blank" href={this.props.courseurl} style={{marginLeft: "1vw"}}>{this.props.course}</Button>
                        </div>)
            } else {
                return (<div style={{marginTop: "2vh"}}>
                            <Button className="project-button" target="_blank" href={this.props.github}>See on GitHub</Button>
                        </div>)
            }
        } else {
            if (this.props.course) {
                return (<div style={{marginTop: "2vh"}}>
                            <Button variant="secondary" target="_blank" href={this.props.courseurl}>{this.props.course}</Button>
                        </div>)
            } else {
                return null;
            }
        }
    }

    render() {
        return (
            <Container className="project-overview">
                <div className="project-row space-between">
                    <div className="project-title">{this.props.title}</div>
                    <div className="project-year">{this.props.year}</div>
                </div>
                <div className="project-row space-between" style={{marginTop: "1vh"}}>
                    <div className="project-description">{this.props.description}</div>
                </div>
                {this.getButtons()}
            </Container>
        )
    }
}


export default ProjectOverview;