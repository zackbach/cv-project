import React, { Component } from 'react';

class SchoolForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      degree: "",
      start: "",
      end: ""
    }
  }

  onSubmit = (e) => {
    const { name, degree, start, end } = this.state

    e.preventDefault();
    this.props.handleFormClose(e);
    this.props.handleSubmit(name, degree, start, end, this.props.school.index);
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    const { school } = this.props;
    
    return(
      <form onSubmit={this.onSubmit}>
        <label htmlFor="schoolName">Name of School: </label>
        <input placeholder={school.name} type="text" id="nameInput" name="name" onChange={this.handleChange}/>

        <label htmlFor="schoolDegree">Degree: </label>
        <input placeholder={school.degree} type="text" id="degreeInput" name="degree" onChange={this.handleChange} />

        <label htmlFor="schoolStart">Starting Date: </label>
        <input placeholder={school.start} type="date" id="startInput" name="start" onChange={this.handleChange} />

        <label htmlFor="schoolEnd">Ending Date: </label>
        <input placeholder={school.end} type="date" id="endInput" name="end" onChange={this.handleChange} />

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SchoolForm