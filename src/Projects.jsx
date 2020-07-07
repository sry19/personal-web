import React, { Component } from 'react';
import "./resumeData.json";
import { Link} from "react-scroll";
const movieengine = require("./assets/movieengine.png");
const taskmanage = require("./assets/taskmanage.png");
const othello = require("./assets/othello.png");
const rna = require("./assets/rna.png");
const yelpcamp = require("./assets/yelpcamp.png");


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
    let obj = { "movieengine":movieengine,"taskmanage":taskmanage,"othello":othello,"rna":rna, "yelpcamp":yelpcamp};

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
          
        var projectimg = projects.image;
       
        var projectTitle = projects.title;
        var projectDetails = projects.details;
        var projectLocation = projects.location;
        var projectTime = projects.time;
        var projectid = projects.id;
        var projecturl = projects.url;

        if (projectDetails) {
          var lines = projectDetails.map(function(line) {
            return <li key={line}>{line}</li>
          })
        }
        

        return <div key={projectid} className="card">
        <img src={obj[projectimg]} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{projectTitle}</h5>
            <p className="card-text">{lines}</p>
            <p className="card-text"><small className="text-muted">{projectLocation}</small></p>
            <p className="card-text"><small className="text-muted">{projectTime}</small></p>
            <a href={projecturl} className="btn btn-primary btn-lg active" role="button" aria-pressed="true" aria-disabled="true">GO!</a>
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