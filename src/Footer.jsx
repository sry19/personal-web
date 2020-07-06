import React from 'react';
import "./styles/NavBar.css";
import {Navbar, Container} from 'react-bootstrap';


class Footer extends React.Component {

    render () {
        return (
            <Container>
            <Navbar  className="dark-bg height-footer" fixed="bottom" >
                <div >
                    <small>
                        <p className="navbar-footer white-text">
                            &copy;
                            Copyright 2020 
                            &nbsp;
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-brightness-low" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                                <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
                            </svg>
                            &nbsp;
                            <a href="https://github.com/sry19/web_dev">
                                GitHub repository
                            </a>
                        </p> 
                    </small>
                </div>
            </Navbar>
            </Container>
        )
    }
}

export default Footer;