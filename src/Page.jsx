import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Contents from './Contents.jsx';
// import { LinkContainer } from 'react-router-bootstrap';

export default class Page extends React.Component {

    render () {
        return (
            <div>
                <NavBar />
                <Contents />
                <hr />
                <Footer />
            </div>        
        );
    }


}



