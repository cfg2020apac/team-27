import React from 'react'
import { 
    useRouteMatch,
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import './Announcement.css';
import SingleAnnouncement from './SingleAnnouncement'
import TableAnnouncement from './TableAnnouncement'

export default function Announcement(){
    const match = useRouteMatch()

    return (
        <Router>
            <Switch>
                <Route path={`${match.path}/:id`}>
                    <SingleAnnouncement />
                </Route>
                <Route path={`${match.path}`}>
                    <TableAnnouncement/>
                </Route>
            </Switch>
        </Router>
   )
}