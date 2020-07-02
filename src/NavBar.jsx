import React from 'react';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './styles/NavBar.css';

class NavBar extends React.Component {
    render () {
        return (
            
            <div>
                <Navbar expand="lg"  variant="dark" fixed="top" className="dark-bg">
                    <Navbar.Brand><Container className="white-text ">Ruoyun Sun</Container></Navbar.Brand>
                    <br />
                    <Nav>
                        <Container>
                            <LinkContainer to="/home">
                                <NavItem className="white-text link">Home</NavItem>
                            </LinkContainer>
                        </Container>
                        <Container>
                            <LinkContainer to="/photowall">
                                <NavItem className="white-text link">PhotoWall</NavItem>
                            </LinkContainer>
                        </Container>      
                    </Nav>
                </Navbar>
            </div>
         
        )
    }
}

export default NavBar;