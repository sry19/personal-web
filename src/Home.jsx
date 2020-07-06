import React from 'react';
import Section from './Section.js';
import dummyText from './DummyText.js';
import About from './About.jsx';
import Start from './Start.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import ContactMe from './ContactMe.jsx';
import data from './resumeData.json';

export default class Home extends React.Component {
    
    render() {

        return (
        
            <div >
                <div>
                    <Start />
                    <div id="section1">
                        <About data={data.main}/>
                    </div>
                    <div id="section2">
                        <Resume data={data.resume}/>
                    </div>
                    <div id="section3">
                        <Projects data={data.portfolio} />
                    </div>
                    <div id="section4">
                        <ContactMe />
                    </div>
                </div>
           </div>
        );
    }
}


