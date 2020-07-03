import React from 'react';
import Section from './Section.js';
import dummyText from './DummyText.js';
import About from './About.jsx';

export default class Home extends React.Component {
    render() {
        return (
        
            <div >
                <div>
                    <div id="section1">
                        <About />
                    </div>
                    <div id="section2">
                        <About />
                    </div>
                    <div id="section3">
                        <About />
                    </div>
                    <div id="section4">
                        <About />
                    </div>
                </div>
           </div>
        );
    }
}


