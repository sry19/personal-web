import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

export default class SlidingWindow extends React.Component {
    render () {
        return (
            <div width="100%">
                <Container className="bg-dark container-lg">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://localhost:3000/assets/touxiang.jpeg"
                            alt="First slide"
                             height="300"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://localhost:3000/assets/Sunflower_from_Silesia2.jpg"
                            alt="Second slide"
                            height="300"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://localhost:3000/assets/touxiang.jpeg"
                            alt="Third slide"
                            height="300"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        )
    }
}