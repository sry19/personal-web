import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home.jsx';
import SlidingWindow from './SlidingWindow.jsx';

import './styles/Contents.css';


export default class Contents extends React.Component {
    render() {
       
        return (
            
            <div>
                <Switch>
                    <Redirect exact from="/personal-web" to="/personal-web/home" />
                    <Route path="/personal-web/home" render={(props)=> <Home data={this.props.data} />} />
                    <Route path="/personal-web/photowall" component={SlidingWindow} />
                </Switch>
            </div>
        )
    }
}