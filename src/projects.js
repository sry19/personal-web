import React from 'react';
// const pinksky = require("./assets/pinksky.jpg");

export default class Projects extends React.Component {
    render () {
        return (
            <div class="card-columns">
                <div class="card">
                    <img src={require("./assets/pinksky.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Multiprocessing Movie Search Engine (C, Linux, Valgrind, Emacs)</h5>
                        <p class="card-text">Built a file indexer and a file processor using Linked List and Hash Table, applied Google Tests and exposed high-level abstracted APIs \n Implemented a multi-threaded File Parser to increase the responsiveness \n Developed a query processor using socket programming and TCP/IP protocol suite that serves multiple clients concurrently and increases throughput</p>
                    </div>
                </div>
                
                <div class="card">
                    <img src={require("./assets/pinksky.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Task Management Application (Java, JUnit)</h5>
                    <p class="card-text">Designed a full-stack personalized task management application compatible with Windows and Mac OS using MVC framework to allow users to create and organize to-dos \n Implemented a general command line parser and a flexible filter via Builder and Factory design patterns \n Performed industry-level teamwork using Git, exchanged information via interfaces and scheduled meetings frequently to collaborate with each other
</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card ">
                    <img src={require("./assets/stational.jpeg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Othello Game Design(Python)</h5>
                    <p class="card-text">Used Python to design disk, board and player classes and write tests using unit-test, improved user-friendliness by producing user interface with Processing and customizing board \n Established game controller to launch initial setup and automatically switch user control, feasibly placed and flipped disks to keep the game orderly \n Built artificial intelligence to play against users in order to make the game challenging \n Recorded the scores in real time, displayed the results and refreshed the leader board</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
        
                
                <div class="card">
                    <img src={require("./assets/pinksky.jpg")} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Campgrounds Experience Sharing Website (JavaScript)</h5>
                    <p class="card-text">Developed the website under Amazon Cloud9 and deployed on Heroku with integration of MongoDB Atlas \n Implemented RESTful server-side logic under Express.js, enabled users to signup, login, share and comment on campgrounds posts, and supported authentication service through routers \n Built front-end through Bootstrap and jQuery, with the functionality of action-triggered response \n Implemented data persistence layer with MongoDB</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                
            </div>
        );
    }
}