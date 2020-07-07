import React from 'react';
import { Link } from "react-scroll";
import './styles/Start.css' ;
const gg = require("./assets/gg.png");
const fb = require("./assets/fb.png");
const github = require("./assets/github.png");
const ins = require("./assets/ins.png");
const linkedin = require("./assets/linkedin.png");

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
            <div className="op">
            
            
            <div className="container pad">
              <h1 className="display-4 white-text font-change">I'm Ruoyun</h1>
              <h2 className="lead white-text">Welcome to my personal website.</h2>
                <br />
            <ul className="social">
              <li key="google"><a href="mailto:sunruoy96@gmail.com"><img src={gg} height="40px" alt="gg"/></a></li>
              <li key="facebook"><a href="https://www.facebook.com/ruoyun.sun.353"><img src={fb} height="40px" alt="fb"/></a></li>
              <li key="linkedin"><a href="https://www.linkedin.com/in/ruoyun-sun/"><img src={linkedin} height="40px" alt="linkedin"/></a></li>
              <li key="github"><a href="https://github.com/sry19"><img src={github} height="40px" alt="github"/></a></li>
              <li key="ins"><a href="https://www.instagram.com/sun_rebecca666/"><img src={ins} height="40px" alt="ins"/></a></li>
              </ul>
            </div>
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
          </div>          
           
               
        )
    }
}
