import React from 'react';
import { Jumbotron, Container,Button} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './styles/Start.css' ;

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color : 'white'};
        this.onHover = this.onHover.bind(this);
        this.noHover = this.noHover.bind(this);
    }

    onHover() {
        this.setState({color: 'orange'});
    }

    noHover() {
        this.setState({color: 'white'});
    }

    
    render() {
        return (
            <div fluid className="jumbo">
                <Jumbotron className="op">
                    <Container className="op-inner">
                        
            
                        <p className="para">
                            <h1 className="h1-size">I'm Ruoyun.</h1>
                        <br />Welcome to my personal website.
                        </p>
                        
                            <Link className="nav-item l"
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onMouseOver={this.onHover}
                                onMouseLeave={this.noHover}
                            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={this.state.color} width="40px" height="40px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8z"/></svg>
                            </Link>
                        
                    </Container>
                    
                </Jumbotron>
            </div>
        )
    }
}
