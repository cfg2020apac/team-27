import React from 'react';
import { Container, Jumbotron, Card, Alert, Button, Form, ProgressBar, Badge, Col, Row, Accordion } from 'react-bootstrap';

export default function StudentProgress() {
    return (
        <Container fluid>
            <Jumbotron align="left">
                <h1>Progress Report</h1>

                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Row>
                                <Col>
                                    Kevin Kim
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <Badge pill variant="danger">Important</Badge>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form.Text className="text-muted">Current milestone progress</Form.Text>
                                <ProgressBar striped variant="info" now={20}/>
                                <Row fluid>
                                    <Col >
                                        Average Grade
                                    </Col>
                                    <Col>
                                    60%
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Row>
                                <Col>
                                    Alice Kim
                                </Col>
                                <Col className="d-flex align-items-center justify-content-end">
                                    <Badge pill variant="danger">Important</Badge>
                                </Col>
                            </Row>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Bob Bob
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Jumbotron>
        </Container>
    )
}