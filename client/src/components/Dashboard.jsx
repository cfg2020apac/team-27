import React from 'react';
import './Dashboard.css';
import { Container, Jumbotron, Card, Alert, Col, Row, ProgressBar } from 'react-bootstrap';
import "react-step-progress-bar/styles.css";
import circleOutline from '../img/circle-outline-black.svg';

export default function Dashboard(){
    return (
        <Container fluid>
            <Jumbotron align="left" className="module">
                <h1>Hi, Kevin.</h1>
                <p className="text-muted mb-3">You're making good progress!</p>
                <ProgressBar now={30} label="30%"/>
                <Alert variant="danger" style={{marginTop: "10px"}}>This is an alert</Alert>
            </Jumbotron>

            <Jumbotron align="left" className="module">
                <h1>Worksheets Due</h1>
                <Card bg="danger" text="light" className="mb-2" fluid>
                    <Card.Body style={{padding: "0.3rem"}}>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0, fontSize: "15px"}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle style={{margin: 0, fontSize: "15px"}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
                <Card className="mb-2" fluid>
                    <Card.Body style={{padding: "0.3rem"}}>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0, fontSize: "15px"}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle style={{margin: 0, fontSize: "15px"}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
                <Card className="mb-2" fluid>
                    <Card.Body style={{padding: "0.3rem"}}>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0, fontSize: "15px"}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle style={{margin: 0, fontSize: "15px"}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
                <Card fluid>
                    <Card.Body style={{padding: "0.3rem"}}>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0, fontSize: "15px"}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle style={{margin: 0, fontSize: "15px"}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </Jumbotron>

            <Jumbotron align="left" className="module">
            <h1>Meetings Today</h1>
            <Card className="mb-2" fluid>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Subtitle className="text-muted" style={{margin: 0}}>1:00 - 2:00 pm</Card.Subtitle>
                        </Col>
                        <Col>
                            <Card.Title className="d-flex justify-content-end" style={{margin: 0}}>Team Meeting @ Zoom</Card.Title>
                        </Col>
                    </Row>
                    {/* <Card.Link href="#">Submission Link</Card.Link> */}
                </Card.Body>
            </Card>
            <Card bg="dark" text="light" style={{opacity: "0.5"}} fluid>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Subtitle style={{margin: 0}}>1:00 - 2:00 pm</Card.Subtitle>
                        </Col>
                        <Col>
                            <Card.Title className="d-flex justify-content-end" style={{margin: 0}}>Team Meeting @ Zoom</Card.Title>
                        </Col>
                    </Row>
                    {/* <Card.Link href="#">Submission Link</Card.Link> */}
                </Card.Body>
            </Card>
            <Card fluid>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Subtitle className="text-muted" style={{margin: 0}}>1:00 - 2:00 pm</Card.Subtitle>
                        </Col>
                        <Col>
                            <Card.Title style={{margin: 0}}>Team Meeting @ Zoom</Card.Title>
                        </Col>
                    </Row>
                    {/* <Card.Link href="#">Submission Link</Card.Link> */}
                </Card.Body>
            </Card>

            </Jumbotron>
        </Container>
    )
}