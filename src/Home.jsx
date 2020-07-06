import React from 'react';
import About from './About.js';
import Start from './Start.js';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import ContactMe from './ContactMe.js';
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


