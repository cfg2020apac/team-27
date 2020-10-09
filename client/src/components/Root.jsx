import React,{useState} from 'react';
import {
    useRouteMatch,
    Route,
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom';

import Home from'./Home';

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
                        <Link to='/Matching'>Matching</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/dashboard">
                        <Home/>
                    </Route>
                    <Route path="/Matching">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Root;