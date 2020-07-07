import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./styles/SlidingWindow.css";
const url1 = require( "./assets/WechatIMG38.jpeg");
const url2 = require("./assets/emile-perron-xrVDYZRGdw4-unsplash.jpg");
const url3 = require("./assets/cher.jpeg");

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
                            src={url1}
                            alt="First slide"
                             height="800"
                             width="2000"
                            />
                            <Carousel.Caption>
                            <h3>Jiaxing, Zhejiang, China</h3>
                            <p>Jiaxing is a beautiful city and has many traditional Chinese elements</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={url2}
                            alt="Second slide"
                            height="800"
                            />

                            <Carousel.Caption>
                            <h3>Computer Science</h3>
                            <p>I love coding and start to build up my career path.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="w-100"
                            src={url3}
                            alt="Third slide"
                            height="800"
                            />

                            <Carousel.Caption>
                            <h3 className="black-text">K-Pop music</h3>
                            <p className="black-text">Obsessed with K-Pop music from 12, I hope I can dance well like my idols one day.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                
            </div>
        )
    }
}