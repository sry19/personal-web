import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component {

  render() {
    
    return (
      <div>
        <Router>
          <Page />
        </Router>
          
      </div>
    );
  }
}

