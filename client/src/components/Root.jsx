import React,{useState} from 'react';
import {
    useRouteMatch,
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import JA from '../JA.png';
import Home from'./Home';
import Dashboard from './Dashboard';
import Meetings from './Meetings';
import MyProfile from './MyProfile';
import Milestones from './Milestones';
import {DoorClosed} from 'react-bootstrap-icons';

function Root(){
    let match = useRouteMatch();

    return(
        <div>
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/root">
                        JA Hong Kong
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem><Nav.Link href={`${match.url}/Home`}>Home</Nav.Link></NavItem>
                            <NavItem><Nav.Link href={`${match.url}/Dashboard`}>Dashboard</Nav.Link></NavItem>
                            <NavItem><Nav.Link href={`${match.url}/Meetings`}>Meetings</Nav.Link></NavItem>
                            <NavItem><Nav.Link href={`${match.url}/MyProfile`}>MyProfile</Nav.Link></NavItem>
                            <NavItem><Nav.Link href={`${match.url}/Milestones`}>Milestones</Nav.Link></NavItem>
                        </Nav>
                        <PersonCircle  size={30}/>
                        <span style={{paddingRight:"20px",paddingLeft:"20px"}}>
                            Kevin - Student
                        </span>
                        <DoorClosed  size={30}/>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path={`${match.path}`} render={()=>{
                        return(
                            <Redirect to={`${match.path}/Home`}/>
                        )
                    }}>
                    </Route>
                    <Route exact path={`${match.path}/Home`}>
                        <Home/>
                    </Route>
                    <Route path={`${match.path}/Dashboard`}>
                        <Dashboard/>
                    </Route>
                    <Route path={`${match.path}/Meetings`}>
                        <Meetings/>
                    </Route>
                    <Route path={`${match.path}/MyProfile`}>
                        <MyProfile/>
                    </Route>
                    <Route path={`${match.path}/Milestones`}>
                        <Milestones/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Root;