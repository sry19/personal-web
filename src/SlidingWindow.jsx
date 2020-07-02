import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./styles/SlidingWindow.css";

export default class SlidingWindow extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }



    render () {
        return (
            <div width="100%" height="100%">
                
                    <Carousel width="100%" height="100%">
                        <Carousel.Item>
                            <img
                            className="d-block w-100 "
                            src="http://localhost:3000/assets/WechatIMG38.jpeg"
                            alt="First slide"
                             height="800"
                             width="2000"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="http://localhost:3000/assets/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                            alt="Second slide"
                            height="800"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="w-100"
                            src="http://localhost:3000/assets/cher.jpeg"
                            alt="Third slide"
                            height="800"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                
            </div>
        )
    }
}