import React,{useState} from 'react';
import {
    useRouteMatch,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import JA from '../JA.png';
import Home from'./Home';
import Dashboard from './Dashboard';
import Meetings from './Meetings';

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
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path={`${match.path}/Home`}>
                        <Home/>
                    </Route>
                    <Route path={`${match.path}/Dashboard`}>
                        <Dashboard/>
                    </Route>
                    <Route path={`${match.path}/Meetings`}>
                        <Meetings/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Root;