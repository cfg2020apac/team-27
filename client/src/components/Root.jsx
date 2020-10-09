import React, { useState } from "react";
import {
    useRouteMatch,
    useHistory,
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
    Link,
} from "react-router-dom";
import { Navbar, Nav, NavItem,Dropdown,DropdownButton, NavDropdown } from "react-bootstrap";
import JA from "../JA.png";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Meetings from "./Meetings";
import MyProfile from "./MyProfile";
import Milestones from "./Milestones";
import { DoorClosed, PersonCircle,Bell,StarFill,CheckCircle,ExclamationCircleFill } from "react-bootstrap-icons";
import './Root.css';
import Announcement from "./Announcement/Announcement";
import SingleAnnouncement from "./Announcement/SingleAnnouncement";
import StudentProgress from "./StudentProgress";

function Root() {
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

    const navToNotifcations = ()=>{
        // history.push("/root/Announcements")
        // history.push("/Announcements")
        // console.log("Notifications:",history)
    }
    return (
        <div>
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/root">JA Hong Kong</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem>
                                <Nav.Link href={`${match.url}/Home`}>
                                    Home
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link href={`${match.url}/Dashboard`}>
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
                            <NavItem>
                                <Nav.Link href={`${match.url}/StudentProgress`}>
                                    Student Progress
                                </Nav.Link>
                            </NavItem>
                        </Nav>
                        <span style={{paddingRight:"30px"}}>
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
                            Kevin - Student
                        </span>
                        <DoorClosed size={27}/>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        render={() => {
                            return <Redirect to={`${match.path}/Home`} />;
                        }}
                    ></Route>
                    <Route exact path={`${match.path}/Home`}>
                        <Home />
                    </Route>
                    <Route path={`${match.path}/Dashboard`}>
                        <Dashboard />
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
