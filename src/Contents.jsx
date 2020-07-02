import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import SlidingWindow from './SlidingWindow.jsx';

import './styles/Contents.css';


export default function Contents() {
    
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/photowall" component={SlidingWindow} />
            </Switch>
        </div>
    )
}