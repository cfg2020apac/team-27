import React from 'react';
import './Dashboard.css';
import { Container, Jumbotron, Card, Alert, Col, Row } from 'react-bootstrap';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from 'react-step-progress-bar';

export default function Dashboard(){
    return (
        <Container fluid>
            <Jumbotron align="left">
                <h1>Hi, Kevin.</h1>
                <p>This is the progress you've made so far.</p>
                <ProgressBar percent={76} filledBackground="green">
                <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png"
                        />
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png"
                        />
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/240px-Ski_trail_rating_symbol-green_circle.svg.png"
                        />
                    )}
                </Step>
                </ProgressBar>
                <Alert variant="danger" style={{marginTop: "10px"}}>This is an alert</Alert>
            </Jumbotron>

            <Jumbotron align="left">
                <h1>Worksheets Due</h1>
                <Card bg="danger" text="light" fluid>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle style={{margin: 0}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
                <Card fluid>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle className="text-muted" style={{margin: 0}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
                <Card fluid>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle className="text-muted" style={{margin: 0}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
                <Card fluid>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title style={{margin: 0}}>Worksheet1</Card.Title>
                            </Col>
                            <Col className="d-flex align-items-center justify-content-end">
                                <Card.Subtitle className="text-muted" style={{margin: 0}}>Due Tonight 10pm</Card.Subtitle>
                            </Col>
                        </Row>
                        {/* <Card.Link href="#">Submission Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </Jumbotron>

            <Jumbotron align="left">
            <h1>Meetings Today</h1>
            <Card fluid>
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