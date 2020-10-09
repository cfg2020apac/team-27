import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { DoorClosed, PersonCircle,Bell,StarFill,CheckCircle,ExclamationCircleFill } from "react-bootstrap-icons";

export default function SingleAnnouncement(props){
    let { id } = useParams();

    // Query from database based on id


    const dummyAnnouncement = {
        "body": "Please hand in your worksheets as soon as possible as this is assessed!",
        "date": "Oct 4, 2020",
        "description":"Worksheet is due at 11:59 pm tonight.",
        "title": "Worksheet is due soon!",
        "type": "bad",
    }
    return(
        <Jumbotron className="module" align="left" style={{height:"100vh"}}>
            <span className="mb-4"><ExclamationCircleFill size={20} color="red"/></span>
            <h1>{dummyAnnouncement.title}</h1>
            <h6 className="text-muted mb-5">{dummyAnnouncement.description}</h6>
            <p>{dummyAnnouncement.body}</p>
        </Jumbotron>
    );
}