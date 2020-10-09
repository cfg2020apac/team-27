import React, { useState, useEffect } from 'react';
import { 
    useRouteMatch,
    useHistory,
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
import {Container,Jumbotron,Card,Row, Col} from 'react-bootstrap';
import { DoorClosed, PersonCircle,Bell,StarFill,CheckCircle,ExclamationCircleFill } from "react-bootstrap-icons";
import axios from 'axios';

export default function TableAnnouncement(){

    const match = useRouteMatch();

    const [contents, setContents] = useState([]);

    useEffect(() => {
        const getAnnouncements = async () => {
            const res = await axios.get("http://localhost:8000/announcements/");
            console.log(res.data);
            setContents(res.data);
        };

        if (!contents.length) {
            getAnnouncements();
        }
    }, []);

    const tableHeading = [
        "Title",
        "Description",
        "Date"
    ]

    const dummyAnnouncements = [
        {
            "id":"1",
            "title":"Announcement 1",
            "description":"This is description of announcement 1",
            "date": "29th May, 2020",
            'type':'star'
        },
        {
            "id":"2",
            "title":"Announcement 2",
            "description":"This is description of announcement 2",
            "date": "21st May, 2020",
            'type':'good'
        },
        {
            "id":"3",
            "title":"Announcement 3",
            "description":"This is description of announcement 3",
            "date": "7th April, 2020",
            'type':'bad'
        },
        {
            "id":"4",
            "title":"Announcement 4",
            "description":"This is description of announcement 4",
            "date": "4th April ,2020",
            'type':'star'
        }
    ]
    const typeIcon = (type)=>{
        switch(type){
            case 'star':
                return <span style={{paddingLeft:"5px"}}>⭐</span>
            case 'good':
                return <span style={{paddingLeft:"5px"}}><CheckCircle size={20} color="green"/></span>
            case 'bad':
                return <span style={{paddingLeft:"5px"}}><ExclamationCircleFill size={20} color="red"/></span>
        }
    }
    return (
        <Jumbotron fluid style={{height:"100vh"}}>
            <Container>
                <h1>Announcements</h1>
                {
                    contents.map((e,index)=>{
                        return(
                            <Link to={`${match.path}/${e.id}`}>
                                <div style={{paddingBottom:"20px"}}> 
                                    
                                        <Card align="left" text="dark">
                                            <Card.Body >
                                                <Card.Title>
                                                    <Row>
                                                        <Col xs={10}>
                                                            <h5 className="mb-0">{e.title}</h5>
                                                        </Col>
                                                        <Col xs={2}>
                                                            {typeIcon(e.type)}
                                                        </Col>
                                                    </Row>
                                                    {/* {[e.title,<div style={{paddingLeft:"30px"}}/>,typeIcon(e.type)]} */}
                                                </Card.Title>
                                                <Card.Subtitle>{e.date}</Card.Subtitle>
                                                <Card.Text>
                                                    {e.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                </div>
                            </Link>

                        );
                    })
                }
                {/* <Table responsive>
                    <thead>
                        <th></th>
                        {
                            tableHeading.map((e,index)=>{
                            return <th key={index}>{e}</th>
                            })
                        }
                    </thead>
                    <tbody>
                        {
                            dummyAnnouncements.map((e,index)=>{
                                return (
                                    <tr>
                                        <td> {index+1}</td>
                                        <td> <Link to={`${match.path}/${e.id}`}>{e.title}</Link></td>
                                        <td> <Link to={`${match.path}/${e.id}`}>{e.description}</Link></td>
                                        <td> <Link to={`${match.path}/${e.id}`}>{e.date}</Link></td>
                                    </tr>
                                    );
                            })
                        }
                    </tbody>
                </Table> */}
            </Container>
        </Jumbotron>
    );
}