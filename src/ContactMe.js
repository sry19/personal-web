// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import './styles/ContactMe.css';
import { Link, animateScroll as scroll } from "react-scroll";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      color: 'white'
    };
    this.onHover = this.onHover.bind(this);
    this.noHover = this.noHover.bind(this);
    this.scrollToTop=this.scrollToTop.bind(this);
  }
 
  scrollToTop = () => {
    scroll.scrollToTop();
};

onHover() {
    this.setState({color: 'orange'});
}

noHover() {
    this.setState({color: 'white'});
}

  render() {
    const { status } = this.state;
    return (
        <div className="div-pro ">
            <h1 className="white-text">Contact Me</h1>
      <form className="f"
        onSubmit={this.submitForm}
        action="https://formspree.io/xeqrrzzz"
        method="POST"
      >
       
        <label className="lb white-text">Email:</label>
        <input type="email" name="email" className="ip"/>
        <br />
        <label className="lb white-text">Message:</label>
        <textarea type="text" name="message" className="ip ip-m" height="48" />
        <br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="contactsumbit ">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      <Link className="l put-middle"
         activeClass="active"
         
         spy={true}
         smooth={true}
         offset={-70}
         duration={500}
         onMouseOver={this.onHover}
         onClick={this.scrollToTop}
         onMouseLeave={this.noHover}
     ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={this.state.color} width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41zM6 18h12v-2H6v2z"/></svg>
</Link>
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}