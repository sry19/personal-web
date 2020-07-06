import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './resumeData.json';

export default class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {data:data};    
  }

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

