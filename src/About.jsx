import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import './styles/About.css';

export default class About extends React.Component {
    render () {
        return (
            <div width="100%" className="cover-hight">
                <Container className="bg-dark cover-hight">
                    <Row className="sidenav">
                        <Col xs={6} md={4} className="about ">
                            <img className="selfie" src="http://localhost:3000/assets/me.png" alt="me" />
                        </Col>
                        <Col xs={6} md={8}>
                            <p>sfwgregrefrewgregerl</p>
                        </Col>
                        
                    </Row>
                    <Row>
                        
                    </Row>

                </Container>
            </div>
        )
    }
}