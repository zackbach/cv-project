import React, { Component } from 'react';
import Job from './Job';
import uniqid from 'uniqid';

class JobContainer extends Component {
  constructor() {
    super();

    this.handleNewJob = this.handleNewJob.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      jobs: [],
    }
  }

  handleNewJob = (e) => {
    e.preventDefault();
    let job = {
      name: "Test Job",
      position: "Manager",
      start: "2016-08-25",
      end: "2020-06-05",
      index: this.state.jobs.length,
    }
    this.setState({
      jobs: this.state.jobs.concat(job),
    })
  }

  handleDelete = (e, index) => {
    let newJobs = [...this.state.jobs]
    newJobs.splice(index, 1);
    this.setState({
      jobs: newJobs,
    })
  }

  handleSubmit = (name, position, start, end, index) => {
    let job = {
      name: name,
      degree: position,
      start: start,
      end: end,
      index: index,
    }
    let newJobs = [...this.state.jobs];
    newJobs[index] = job;
    this.setState({
      jobs: newJobs
    });
  }

  render() {
    const { jobs } = this.state;

    return (
      <div>
        {jobs.map((job) => {
          return <Job key={uniqid()} job={job} handleDelete={this.handleDelete} handleSubmit = {this.handleSubmit}/>
        })}
        <button onClick={this.handleNewJob}>Add Job</button>
      </div>
    )
  }

}

export default JobContainer;