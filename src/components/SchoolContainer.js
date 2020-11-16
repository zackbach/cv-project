import React, { Component } from 'react';
import School from './School';
import uniqid from 'uniqid';

class SchoolContainer extends Component {
  constructor() {
    super();

    this.handleNewSchool = this.handleNewSchool.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      schools: [],
    }
  }

  handleNewSchool = (e) => {
    e.preventDefault();
    let school = {
      name: "Test School",
      degree: "Diploma",
      start: "2016-08-25",
      end: "2020-06-05",
      index: this.state.schools.length,
    }
    this.setState({
      schools: this.state.schools.concat(school),
    })
  }

  handleDelete = (e, index) => {
    let newSchools = [...this.state.schools]
    newSchools.splice(index, 1);
    this.setState({
      schools: newSchools,
    })
  }

  handleSubmit = (name, degree, start, end, index) => {
    let school = {
      name: name,
      degree: degree,
      start: start,
      end: end,
      index: index,
    }
    let newSchools = [...this.state.schools];
    newSchools[index] = school;
    this.setState({
      schools: newSchools
    });
  }

  render() {
    const { schools } = this.state;

    return (
      <div>
        {schools.map((school) => {
          return <School key={uniqid()} school={school} handleDelete={this.handleDelete} handleSubmit = {this.handleSubmit}/>
        })}
        <button onClick={this.handleNewSchool} className="btn btn-primary">Add School</button>
      </div>
    )
  }

}

export default SchoolContainer;