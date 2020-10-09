import React from 'react';
import './Dashboard.css';
import { Container, Jumbotron, Card, Alert, Col, Row, ProgressBar, Form, Button, Accordion } from 'react-bootstrap';
import "react-step-progress-bar/styles.css";
// import circleOutline from '../img/circle-outline-black.svg';

export default function Dashboard(){
    return (
        <Container fluid>
            <Jumbotron align="left" className="module">
                <h1>Hi, Kevin.</h1>
                <Form.Text>Current Milestone Progress</Form.Text>
                <ProgressBar className="mb-2" now={80} label="80%"/>
                <p className="text-muted mb-3">You're making good progress!</p>
                <Form.Text>Alerts</Form.Text>
                <Alert variant="danger" style={{marginTop: "10px"}}>Worksheet 1 due tonight at 11:59pm</Alert>
                <Alert variant="warning" style={{marginTop: "10px"}}>Worksheet 2 due tomorrow at 10:00 pm</Alert>
            </Jumbotron>

            <Jumbotron align="left" className="module">
                <Form.Text className="text-muted mb-0">Assessments</Form.Text>
                <h1>Worksheets Due</h1>
                <Accordion>
                    <Card bg="danger">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Row>
                                <Col>
                                    <Card.Title style={{margin: 0, fontSize: "15px"}}>Worksheet 1</Card.Title>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <Card.Subtitle style={{margin: 0, fontSize: "15px"}}>Due Tonight 11:59pm</Card.Subtitle>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body text="light">
                                <Card.Text text="light">
                                    Description of the worksheet.
                                </Card.Text>
                                <Button>Submit</Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card bg="warning">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Row>
                                <Col>
                                    <Card.Title style={{margin: 0, fontSize: "15px"}}>Worksheet 2</Card.Title>
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <Card.Subtitle style={{margin: 0, fontSize: "15px"}}>Due Tomorrow 10pm</Card.Subtitle>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Review the content of Worksheet 3</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
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