// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import './styles/ContactMe.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
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