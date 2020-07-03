import React from 'react';
import { Navbar, Nav, NavItem, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import { LinkContainer } from 'react-router-bootstrap';
import './styles/NavBar.css';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showSubNavBar: false };
        this.scrollToTop = this.scrollToTop.bind(this);
        this.onShow= this.onShow.bind(this);
        this.onHide=this.onHide.bind(this);
    }

    componentDidMount() {
        this.setState({ showSubNavBar: false })
    }
   
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    onShow() {
        this.setState({ showSubNavBar: true})
        scroll.scrollToTop();
    }

    onHide() {
        this.setState({ showSubNavBar: false})
    }

    render () {
        const showSubNavBar = this.state.showSubNavBar;
        let sub = '';
        if (showSubNavBar) {
            sub = <div className="nav-content">
                            
                        
                            <Link className="nav-item"
                                activeClass="active"
                                to="section1"
                                smooth={true}
                                spy={true}
                                offset={-70}
                                duration={500}
                            >
                                Section 1
                            </Link>    
                            &nbsp;&nbsp;
                            <Link className="nav-item"
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Section 2
                            </Link>
                            &nbsp;&nbsp;
                            <Link className="nav-item"
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Section 3
                            </Link>
                            &nbsp;&nbsp;
                            <Link className="nav-item"
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Section 4
                            </Link>       
                </div>
        }
        return (
            <div>
                <Navbar expand="lg"  variant="dark" fixed="top" className="dark-bg">
                    <Navbar.Brand><Container className="white-text ">Ruoyun Sun</Container></Navbar.Brand>
                    <br />
                    <Nav>
                        <Container>
                            
                            <LinkContainer to="/home">   
                                <NavItem className="white-text link" onClick={this.onShow}>Home</NavItem>
                            </LinkContainer>
                        </Container>
                        <Container>{sub}</Container>
                        <Container>
                            <LinkContainer to="/photowall">
                                <NavItem className="white-text link" onClick={this.onHide}>PhotoWall</NavItem>
                            </LinkContainer>
                        </Container>      
                    </Nav>
                </Navbar>
            </div>    
        )
    }
}

export default NavBar;