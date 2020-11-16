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
      <form onSubmit={this.onSubmit} className="mx-3">
        <div className="form-group">
          <label htmlFor="genFName">First Name: </label>
          <input className="form-control" placeholder={general.fName} type="text" id="fNameInput" name="fName" onChange={this.handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="genLName">Last Name: </label>
          <input className="form-control" placeholder={general.lName} type="text" id="lNameInput" name="lName" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="genEmail">Email: </label>
          <input className="form-control" placeholder={general.email} type="text" id="emailInput" name="email" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="genPhone">Phone Number: </label>
          <input className="form-control" placeholder={general.phone} type="text" id="phoneInput" name="phone" onChange={this.handleChange} />
          </div>

        <button type="submit" className="btn btn-outline-success mb-1">Submit</button>
      </form>
    )
  }
}

export default GeneralForm