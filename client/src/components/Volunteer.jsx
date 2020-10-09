import React from 'react';
import './Dashboard.css';
import { Container, Jumbotron, ProgressBar, Card, Accordion, Badge } from 'react-bootstrap';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import './Volunteer.css';

export default function Dashboard(){
    return (
        <Container fluid>
            <Jumbotron align="left">
                <h2>Welcome, Volunteer.</h2>
                <p>Wish you all the best. Stay healthy and happy.</p>
            </Jumbotron>

            <Jumbotron align="left">    
                <h2>Upcoming Deadlines</h2>
                <p>This is the progress of your mentees.</p>
                <h3>Worksheet 1 <Badge variant="danger">Soon</Badge></h3>
                <ProgressBar>
                    <ProgressBar variant="success" now={80} label={`${80}%`}/>
                    <ProgressBar animated variant="info" now={20} label={`${20}%`}/>
                </ProgressBar>
                <h3>Worksheet 2</h3>
                <ProgressBar>
                    <ProgressBar variant="success" now={10} label={`${10}%`}/>
                    <ProgressBar animated variant="info" now={90} label={`${90}%`}/>
                </ProgressBar>
            </Jumbotron>

            <Jumbotron align="left">
                <h2>Meetings Today</h2>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Meeting with XYZ School @ 1300
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Focus on the students' progress on proposal</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Meeting with Another Volunteer @ 1800
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Review the content of Worksheet 3</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Jumbotron>

        </Container>
    )
}