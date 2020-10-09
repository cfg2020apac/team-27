import React from 'react';
import {Container, Row, Col,Card} from 'react-bootstrap';
import moment from 'moment'
// import {Calendar,momentLocalizer,Views} from 'react-big-calendar';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const localizer =BigCalendar. momentLocalizer(moment)
const MyCalendar = (todayDate) =>(
    <div style={{height:"80vh",width:"60vw"}}>
        <BigCalendar
            localizer={localizer}
            events={[
                {
                  'title': 'My event',
                  'allDay': false,
                  'start': new Date(2020, 9, 1, 10, 0), // 10.00 AM
                  'end': new Date(2020, 9, 5, 14, 0), // 2.00 PM 
                }
              ]}
            views={['month']}
            toolbar={false}>
        </BigCalendar>
    </div>
)


function getMonthString(num){
    switch(num){
        case 0: return "January"
        case 1: return "February"
        case 2: return "March"
        case 3: return "April"
        case 4: return "May"
        case 5: return "June"
        case 6: return "July"
        case 7: return "August"
        case 8: return "September"
        case 9: return "October"
        case 10: return "November"
        case 11: return "December"
    }
}

const timeLineCard = (event) =>{
    return (
        <Row style={{paddingBottom:"30px"}}>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {event.title}
                        </Card.Title>
                        <Card.Text>
                            {event.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

const personalCard = (event)=>{
    const date = event.end.getDate()+", "+getMonthString(event.end.getMonth())+", "+event.end.getFullYear();
    return (
        <Row>
            <Col sm={1} style={{alignItems:"center"}}>
                <span style={{height:20,width:20,backgroundColor:"#000000",borderRadius:"50%",position:"absolute"}}/>
                <span style={{height:"50vh",borderLeft:"thick solid #000000",position:"absolute",left:"35px"}}/>
            </Col>
            <Col sm={11} style={{height:"15vh"}}>
                <Container style={{width:"27vw",height:"12vh",border:"1px solid grey",borderRadius:"3px"}}>
                    <Row>
                        <Col sm={5}>
                           <Container>
                               <Row>{event.title}</Row>
                               <Row>Due:</Row>
                               <Row>{date}</Row>
                           </Container>
                        </Col>
                        <Col sm={7}>
                            <p>
                                {event.description}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}
export default function Meetings(){

    const todayDate = new Date(Date.now())
    const month = getMonthString(todayDate.getMonth())
    const dummyEvents = [
        {
            'title': 'My event 1',
            'allDay': false,
            'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
            'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM ,
            'description':"This is event 1"
        },
        {
            'title': 'My event 2',
            'allDay': false,
            'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
            'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
            'description':"This is event 2"
        },
        {
            'title': 'My event 3',
            'allDay': false,
            'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
            'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
            'description':"This is event 3"
        },
        {
            'title': 'My event 4',
            'allDay': false,
            'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
            'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
            'description':"This is event 4"
        },
        {
            'title': 'My event 5',
            'allDay': false,
            'start': new Date(2018, 0, 1, 10, 0), // 10.00 AM
            'end': new Date(2018, 0, 1, 14, 0), // 2.00 PM 
            'description':"This is event 5"
        },
    ]

    return(
        <Container fluid style={{height:"100vh",background:"white"}}>
            <Row style={{height:"100vh",paddingTop:"10px",paddingBottom:"30px"}}>
                <Col sm={8} style={{}}>
                    <Row>
                        <Col><span style={{fontSize:30, fontWeight:"bold"}}>Events</span></Col>
                    </Row>
                    <Row>
                        <Col><span style={{fontSize:20}}>{month}</span></Col>
                    </Row>
                    <Row><Col>{MyCalendar(todayDate)}</Col></Row>
                </Col>
                <Col sm={4}>
                    <Row style={{paddingBottom:"30px"}}><Col><span style={{fontSize:30,fontWeight:"bold"}}>Timeline</span></Col></Row>
                    {dummyEvents.map((e)=>{
                        return personalCard(e)
                    })}
                </Col>
            </Row>
        </Container>
    )
}

