import React from 'react';
import { Navbar, Nav, NavItem, Container } from 'react-bootstrap';
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
        if (!this.state.showSubNavBar) {
        this.setState({ showSubNavBar: true});
        scroll.scrollToTop();
        } else {
            this.setState({ showSubNavBar: false});
        }
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
                                About <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/></svg>
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
                                Resume <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="19px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"/></svg>
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
                                <NavItem className="orange-text link home-width" onClick={this.onShow}>Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg></NavItem>
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