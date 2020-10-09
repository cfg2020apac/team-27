import React,{useState} from 'react';
import {
    useRouteMatch,
    Route,
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom';

import Home from'./Home';
import Dashboard from './Dashboard';
import Matching from './Matching';

function Root(){
    // let match = useRouteMatch();
    return(
        <div>
            <Router>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/matching'>Matching</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/matching">
                        <Matching/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Root;