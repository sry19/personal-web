import React, { Component } from 'react';
import {Card,Button,Container} from 'react-bootstrap';

class Projects extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        var projectTitle = projects.title;
        var projectDetails = projects.details;
        var projectLocation = projects.location;
        var projectTime = projects.time;
        return <div className=""><Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{projectTitle}</Card.Title>
          <Card.Text>
            <p>{projectLocation}<span>&bull;</span> <em className="date">{projectTime}</em></p>
            <p>{projectDetails}</p>
            
          </Card.Text>
          <Button variant="primary">Go!</Button>
        </Card.Body>
      </Card></div>
      })
    }

    return (
      <section id="portfolio" className="bg-dark">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Projects;