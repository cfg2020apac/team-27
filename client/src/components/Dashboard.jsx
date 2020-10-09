import React from 'react';
import './Dashboard.css';
import { Container, Jumbotron, ProgressBar, Card } from 'react-bootstrap';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

export default function Dashboard(){
    return (
        <Container fluid>
            <Jumbotron align="left">
                <h1>Hi, Kevin.</h1>
                <p>This is the progress you've made so far.</p>
                {/* <StepProgressBar
                    startingStep={0}
                    // onSubmit={}
                    steps={[
                        {
                        label: 'Step 1',
                        subtitle: '10%',
                        name: '1',
                        },
                        {
                        label: 'Step 2',
                        subtitle: '50%',
                        name: '2',
                        },
                        {
                        label: 'Step 3',
                        subtitle: '100%',
                        name: '3',
                        }
                    ]}
                />; */}
                <ProgressBar now={50} label={`${50}%`}/>
            </Jumbotron>

            <Jumbotron align="left">
                <h1>Meetings Today</h1>

            </Jumbotron>

            <Jumbotron align="left">
            <h1>Worksheets</h1>
            <Card fluid>
                <Card.Body>
                    <Card.Title>Worksheet 1</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Due Tonight 10pm</Card.Subtitle>
                    <Card.Link href="#">Submission Link</Card.Link>
                </Card.Body>
            </Card>
            
            <Card fluid>
                <Card.Body>
                    <Card.Title>Worksheet 2</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Due 10/10 11:59pm</Card.Subtitle>
                    <Card.Link href="#">Submission Link</Card.Link>
                </Card.Body>
            </Card>
            
            <Card fluid>
                <Card.Body>
                    <Card.Title>Worksheet 3</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Due 15/10 10pm</Card.Subtitle>
                    <Card.Link href="#">Submission Link</Card.Link>
                </Card.Body>
            </Card>
            </Jumbotron>
        </Container>
    )
}