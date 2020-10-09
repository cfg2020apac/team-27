import React from 'react';
import {Container,Jumbotron,Table} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

export default function SingleAnnouncement(props){
    let { id } = useParams();

    // Query from database based on id

    const dummyAnnouncement = {
        "title":"Announcement 1",
        "subject":"Python Programming",
        "description":"This is the description for Announcement 1",
        "content":"A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath"
    }
    return(
        <Jumbotron style={{height:"100vh"}}>
            <h1>{dummyAnnouncement.title}</h1>
            <div style={{padding:"10px"}}/>
            <h2>{dummyAnnouncement.subject}</h2>
            <div style={{padding:"10px"}}/>
            <h3>{dummyAnnouncement.description}</h3>
            <div style={{padding:"10px"}}/>
            <p>{dummyAnnouncement.content}</p>
        </Jumbotron>
    );
}