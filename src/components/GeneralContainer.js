import React, { Component } from 'react';
import General from './General';

class GeneralContainer extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      general: {
        fName: "Joe",
        lName: "Mama",
        email: "joemama@gmail.com",
        phone: "(708) 224-6169"
      },
    }
  }

  handleSubmit = (fName, lName, email, phone) => {
    let newGeneral = {
      fName: fName,
      lName: lName,
      email: email,
      phone: phone,
    }
    this.setState({
      general: newGeneral
    });
  }

  render() {
    const { general } = this.state;

    return (
      <div>
        <General general={general} handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }

}

export default GeneralContainer;