import React,{useState,useEffect} from 'react';
import {Container, Row, Col,Card} from 'react-bootstrap';
import moment from 'moment'
// import {Calendar,momentLocalizer,Views} from 'react-big-calendar';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Briefcase} from 'react-bootstrap-icons';

const localizer =BigCalendar. momentLocalizer(moment)
const MyCalendar = (width) =>(
    
    <div style={{height:"80vh",width:width}}>
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

const getDate  = (date) =>{
    const strReturn = date.getDate() +", "+getMonthString(date.getMonth())+", "+date.getFullYear();
    return strReturn;
}
const timelineElement = (e) =>{
    const date = getDate(e.start)+' - '+getDate(e.end)
    return <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{background:'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
            icon={<Briefcase color="#fff"/>}
        >
        <h3 className="vertical-timeline-element-title">{e.title}</h3>
        <p>
            {e.description}
        </p>
    </VerticalTimelineElement>
}
export default function Meetings(){

    const [calendarWidth,setCalendarWidth] = useState("60vw");

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
    ]

    const updateWindowsDimensions = () =>{
        if(window.innerWidth>573){
            setCalendarWidth("60vw")

        }else{
            setCalendarWidth("90vw")
        }
    }

    useEffect(() => {
        function handleResize() {
          updateWindowsDimensions();
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return(
        <Container fluid style={{height:"100vh",background:"#cfcfcf"}}>
            <Row style={{height:"100vh",paddingBottom:"30px"}}>
                <Col sm={8} style={{paddingTop:"20px",height:"100vh"}}>
                    <Row>
                        <Col><span style={{fontSize:30, fontWeight:"bold"}}>Events</span></Col>
                    </Row>
                    <Row>
                        <Col><span style={{fontSize:20}}>{month}</span></Col>
                    </Row>
                    <Row><Col>{MyCalendar(todayDate)}</Col></Row>
                </Col>
                <Col sm={4} style={{height:"100vh"}}>
                    <Row style={{paddingTop:"20px",paddingBottom:"30px"}}><Col><span style={{fontSize:30,fontWeight:"bold"}}>Timeline</span></Col></Row>
                    <Row>
                        <VerticalTimeline
                            layout={'1-column-left'}
                            >  
                            {dummyEvents.map((e)=>{
                                return timelineElement(e)
                            })}
                        </VerticalTimeline>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

