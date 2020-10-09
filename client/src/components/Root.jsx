import React, { useState } from "react";
import {
    useRouteMatch,
    useHistory,
    Route,
    BrowserRouter as Router,
    Switch,
    useParams,
    Link,
} from "react-router-dom";
import { Navbar, Nav, NavItem,Button, NavDropdown } from "react-bootstrap";
import JA from "./JA.png";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Meetings from "./Meetings";
import MyProfile from "./MyProfile";
import Milestones from "./Milestones";
import { DoorClosed, PersonCircle,Bell,StarFill,CheckCircle,ExclamationCircleFill } from "react-bootstrap-icons";
import './Root.css';
import Announcement from "./Announcement/Announcement";
import StudentProgress from "./StudentProgress";
import DashboardVolunteer from "./Volunteer";

function Root(props) {
    let { userType } = useParams();

    let match = useRouteMatch();
    const history = useHistory();
    const notifications = [
        {
            'title':'Announcement 1',
            'type':'star'
        },
        {
            'title':'Announcement 2',
            'type':'good'
        },
        {
            'title':'Announcement 3',
            'type':'bad'
        },
    ]

    const typeIcon = (type)=>{
        switch(type){
            case 'star':
                return <span style={{paddingLeft:"5px"}}><StarFill size={23} color="#a8a232"/></span>
            case 'good':
                return <span style={{paddingLeft:"5px"}}><CheckCircle size={20} color="green"/></span>
            case 'bad':
                return <span style={{paddingLeft:"5px"}}><ExclamationCircleFill size={20} color="red"/></span>
        }
    }

    const goRoot = () =>{
        history.push('/')
    }
    
    return (
        <div>
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href={`${match.url}`}>JA Hong Kong</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem>
                                <Nav.Link href={`${match.url}`}>
                                    Dashboard
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href={`${match.url}/Meetings`}>
                                    Meetings
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href={`${match.url}/MyProfile`}>
                                    MyProfile
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href={`${match.url}/Milestones`}>
                                    Milestones
                                </Nav.Link>
                            </NavItem>
                            {
                                userType!=="Student"?
                                <NavItem>
                                    <Nav.Link href={`${match.url}/StudentProgress`}>
                                        Student Progress
                                    </Nav.Link>
                                </NavItem>
                                :null
                            }
                        </Nav>
                        <span style={{paddingRight:"10px"}}>
                            <NavDropdown title={<Bell color="#000" size={27}/>} id="basic-nav-dropdown" cssClass='e-caret-hide'>
                            {
                                notifications.map((e)=>{
                                    return <NavDropdown.Item>{[e.title,typeIcon(e.type)]}</NavDropdown.Item>
                                })
                            }
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to={`${match.path}/Announcements`}>All Announcements</Link></NavDropdown.Item> 
                            </NavDropdown>
                        </span>
                        <PersonCircle size={27} />
                        <span
                            style={{
                                paddingRight: "20px",
                                paddingLeft: "20px",
                            }}
                        >
                            Kevin - {userType}
                        </span>
                        
                        <Button 
                            style={{backgroundColor:"transparent",border:"none"}}
                            onClick={goRoot}
                            >
                            <DoorClosed size={27} color="black"/>
                        </Button>
                        
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path={`${match.path}`}>
                        {
                            userType==="Student"?
                            <Dashboard />:
                            <DashboardVolunteer/>
                        }
                    </Route>
                    <Route path={`${match.path}/Meetings`}>
                        <Meetings />
                    </Route>
                    <Route path={`${match.path}/MyProfile`}>
                        <MyProfile />
                    </Route>
                    <Route path={`${match.path}/Milestones`}>
                        <Milestones />
                    </Route>
                    <Route path={`${match.path}/Announcements`}>
                        <Announcement />
                    </Route>
                    <Route path={`${match.path}/StudentProgress`}>
                        <StudentProgress/>
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default Root;
