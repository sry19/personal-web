import React, { Component } from 'react';
import "./resumeData.json";
import { Link} from "react-scroll";
const pinksky = require("./assets/pinksky.jpg");
const stational = require("./assets/stational.jpeg");
const cher = require("./assets/cher.jpeg");


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { color : 'black'};
        this.onHover = this.onHover.bind(this);
        this.noHover = this.noHover.bind(this);
    }

    onHover() {
        this.setState({color: 'orange'});
    }

    noHover() {
        this.setState({color: 'black'});
    }

    
  render() {
    let obj = { "pinksky":pinksky,"stational":stational,"cher":cher};

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
          
        var projectimg = projects.image;
       
        var projectTitle = projects.title;
        var projectDetails = projects.details;
        var projectLocation = projects.location;
        var projectTime = projects.time;
        var projectid = projects.id;
        

        return <div key={projectid} className="card">
        <img src={obj[projectimg]} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{projectTitle}</h5>
            <p className="card-text">{projectDetails}</p>
            <p className="card-text">{projectLocation}</p>
            <p className="card-text">{projectTime}</p>
        </div>
    </div>
      })
    }
    
    return (
      <>
            <div className="card-columns">
                {projects}
            </div>
         <Link className="l put-middle"
         activeClass="active"
         to="section4"
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}
         onMouseOver={this.onHover}
         onMouseLeave={this.noHover}
     ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={this.state.color} width="40px" height="40px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8z"/></svg>
</Link>
  </>
    );
  }
}

export default Projects;