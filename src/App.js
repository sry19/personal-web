import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './Page';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Page />
      </Router>
        
    </div>
  );
}

export default App;
