import React from 'react';
import { Accordion, Card, Container, Button, Row, Col, Image } from 'react-bootstrap';

export default function MyProfile(){
    return(
        <div>
            <Container fluid>
                <Container>
                    <Row>
                        <Col xs={100} md={60}>
                            <Image src="" rounded />
                        </Col>
                   
                    </Row>
                </Container>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="0">
                                About you
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Need to connect to database</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                Past Experience
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Need to connect to database</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="2">
                                Your Group
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Need to connect to database</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    )
}