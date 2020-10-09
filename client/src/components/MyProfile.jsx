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
                                About Kevin
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">

                     
                            <Card fluid>
                                <Card.Body>
                                    <Card.Title>Full Name : Kevin Kim</Card.Title>
                                    <Card.Title>School : Mr Handsome College </Card.Title>
                                    <Card.Title>Year of joining : 2020</Card.Title>
                                    <Card.Title>Year of study : 10 </Card.Title>
                                </Card.Body>
                                <Card.Body>
                      
                 
                                    <Card.Link href="#">Edit Your Profile</Card.Link>
                                </Card.Body>
                                
                            </Card>
                            

                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1">
                                Past Experience
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Programme</th>
                                        <th scope="col">Year</th>
                                       
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">JA Company Programme</th>
                                        <td>2020</td> 
                                    </tr>
                                    <tr>
                                        <th scope="row">JA Personal Spending</th>
                                        <td>2019</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">JA Finance for Future</th>
                                        <td>2019</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="light" eventKey="2">
                                Your Partners
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