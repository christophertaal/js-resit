import React from "react";

const initialState = {
  name: "",
  tele:"",
  mes:"",
  nameError:"",
  teleError:"",
  mesError:"",
};

class Contact extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let teleError = "";
    let mesError = "";

    if (!this.state.name) {
      nameError = "Please enter your name";
    }

    if (!this.state.tele) {
        teleError = "Please enter your number";
    }

    if (!this.state.mes) {
        mesError = "Please enter your message";
    }

    if (teleError || nameError || mesError) {
      this.setState({ teleError, nameError, mesError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    const contactForm = document.getElementById('contact-form')
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
      contactForm.style.display = 'none'
      alert("success")
    }
  };

  render() {
    return (
      <form id="contact-form" onSubmit={this.handleSubmit}>
        <h4 className="contactHeader">Please enter your details here</h4>
        <div className="name">
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>

        <div className="tel">
          <input
            name="tele"
            placeholder="Number"
            value={this.state.tele}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.teleError}
          </div>
        </div>

        <div className="text">
          <textarea
            name="mes"
            placeholder="Message"
            value={this.state.mes}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.mesError}
          </div>
        </div>

        <label for="enq" className="choose">Choose one:</label>
        <div className="dropbox">
            <select name="enq" id="enq">
            <option value="enquiry">Enquiry</option>
            <option value="complaint">Complaint</option>
            <option value="compliment">Compliment</option>
            <option value="generalmessage">General Message</option>
            </select>
        </div>

        <button type="submit" className="btn btn-success mt-2" id="contactButton">Submit</button>
      </form>
    );
  }
}

export default Contact;


// Enquiry, Complaint, Compliment, General 
//     Message)