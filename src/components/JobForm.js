import React, { Component } from 'react';

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      position: "",
      start: "",
      end: ""
    }
  }

  onSubmit = (e) => {
    const { name, position, start, end } = this.state

    e.preventDefault();
    this.props.handleFormClose(e);
    this.props.handleSubmit(name, position, start, end, this.props.job.index);
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    const { job } = this.props;
    
    return(
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="jobName">Name of Job: </label>
          <input className="form-control" placeholder={job.name} type="text" id="nameInput" name="name" onChange={this.handleChange}/>
        </div>

        <div class="form-group">
          <label htmlFor="jobPosition">Position: </label>
          <input className="form-control" placeholder={job.position} type="text" id="positionInput" name="position" onChange={this.handleChange} />
        </div>

        <div class="form-group">
          <label htmlFor="jobStart">Starting Date: </label>
          <input className="form-control" placeholder={job.start} type="date" id="startInput" name="start" onChange={this.handleChange} />
        </div>

        <div class="form-group">
          <label htmlFor="jobEnd">Ending Date: </label>
          <input className="form-control" placeholder={job.end} type="date" id="endInput" name="end" onChange={this.handleChange} />
        </div>

        <button type="submit" className="btn btn-outline-success">Submit</button>
      </form>
    )
  }
}

export default JobForm