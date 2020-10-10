import React, { useState } from 'react';
import './Dashboard.css';
import { Container, Jumbotron, ProgressBar, Card, Col, Alert, Accordion, Badge, Form, Row, Button } from 'react-bootstrap';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import './styles.css'
import flareImg from '../img/flare.png';
import axios from 'axios';

export default function DashboardVolunteer(){

    const [callStatus, setCallStatus] = useState(false);

    const callAnnouncement = () => {
        axios.post("http://localhost:8000/announcements-add/", { 
            body: "Please hand in your worksheets as soon as possible as this is assessed!",
            date: "Oct 4, 2020",
            description:"Worksheet is due at 11:59 pm tonight.",
            title: "Worksheet is due soon!",
            type: "bad",
            // id: "3"
        })
        .then(res => {
            if (res) {
                setCallStatus(true);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <Container fluid>
            <Jumbotron align="left" text="light" className="module" style={{backgroundImage: 'url(' + flareImg + ')', backgroundSize: "cover"}}>
                <h1 class="mb-2" style={{color: "white"}}>Welcome, Volunteer.</h1>
                <p style={{color: "white"}}>Wish you all the best. Stay healthy and happy.</p>
            </Jumbotron>

            <Jumbotron align="left" className="module">    
                <Form.Text className="text-muted mb-0">Upcoming Deadlines</Form.Text>
                <h1>Check the progress of your mentees</h1>
                <div className="d-flex flex-row justify-content-between mb-2">
                    <p class="mb-0">Worksheet 1</p>
                    <Badge variant="danger">Deadline Soon</Badge>
                </div>
                <ProgressBar>
                    <ProgressBar variant="success" now={80} label={`${80}%`}/>
                    <ProgressBar animated variant="info" now={20} label={`${20}%`}/>
                </ProgressBar>
                <Button variant="danger" onClick={callAnnouncement} className="mt-2" size="sm">Notify Students</Button>
                {callStatus && <Alert className="mt-2" variant='success'>Announcement was successfully sent.</Alert>}
                <div className="mb-4"></div>
                <div className="d-flex flex-row justify-content-between mb-2">
                    <p class="mb-0">Worksheet 2</p>
                    <Badge variant="primary">Next Week</Badge>
                </div>
                <ProgressBar>
                    <ProgressBar variant="success" now={10} label={`${10}%`}/>
                    <ProgressBar animated variant="info" now={90} label={`${90}%`}/>
                </ProgressBar>
                <Button className="mt-2" size="sm">Notify Students</Button>
            </Jumbotron>

            <Jumbotron align="left" className="module">
                <Form.Text className="text-muted mb-0">Schedule</Form.Text>
                <h1>Meetings Today</h1>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Row>
                                <Col>
                                    <Card.Subtitle className="text-muted" style={{margin: 0}}>1:00 - 2:00 pm</Card.Subtitle>
                                </Col>
                                <Col>
                                    <p style={{margin: 0}}>Team Meeting @ Zoom</p>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Focus on the students' progress on proposal</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Row>
                                <Col>
                                    <Card.Subtitle className="text-muted" style={{margin: 0}}>3:15 - 4:00 pm</Card.Subtitle>
                                </Col>
                                <Col>
                                    <p style={{margin: 0}}>Project Briefing @ Zoom</p>
                                </Col>
                            </Row>
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