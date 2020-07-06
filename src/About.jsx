import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import './styles/About.css';

export default class About extends React.Component {
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

    render () {
        console.log(this.props.data);
        if(this.props.data){
            var name = this.props.data.name;
            var profilepic= this.props.data.image;
            var bio = this.props.data.bio;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone= this.props.data.phone;
            var email1 = this.props.data.email1;
            var email2 = this.props.data.email2;
            var resumeDownload = this.props.data.resumedownload;
          }

        return (
            <div  className="cover-hight ">
                <Container>
                    <Row>
                        <Col sm={4} className="about">
                            <img className="selfie" src={profilepic} alt="me" />

                        </Col>
                        <Col sm={8} className="about white-text">
                            <h2 className="white-text">About ME</h2>
                                <p>{bio}</p>
                            <h2>Contact Details</h2>
                                <p className="address">
						        <span>{name}</span>
                                <br />
						        <span>
						         {city} {state}, {zip}
                                </span>
                                <br />
						        <span>{phone}</span>
                                <br />
                                <span>{email1}</span>
                                <br />
                                <span>{email2}</span>
					   </p>
                        </Col>
                    </Row>
                
                </Container>
                <Link className="l put-middle"
                                activeClass="active"
                                to="section2"
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