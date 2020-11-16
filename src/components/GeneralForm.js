import React, { Component } from 'react';

class GeneralForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      phone: ""
    }
  }

  onSubmit = (e) => {
    const { fName, lName, email, phone } = this.state

    e.preventDefault();
    this.props.handleFormClose(e);
    this.props.handleSubmit(fName, lName, email, phone);
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    const { general } = this.props;
    
    return(
      <form onSubmit={this.onSubmit}>
        <label htmlFor="genFName">First Name: </label>
        <input placeholder={general.fName} type="text" id="fNameInput" name="fName" onChange={this.handleChange}/>

        <label htmlFor="genLName">Last Name: </label>
        <input placeholder={general.lName} type="text" id="lNameInput" name="lName" onChange={this.handleChange} />

        <label htmlFor="genEmail">Email: </label>
        <input placeholder={general.email} type="text" id="emailInput" name="email" onChange={this.handleChange} />

        <label htmlFor="genPhone">Phone Number: </label>
        <input placeholder={general.phone} type="text" id="phoneInput" name="phone" onChange={this.handleChange} />

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default GeneralForm