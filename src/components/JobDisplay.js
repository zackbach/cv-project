import React, { Component } from 'react';

class JobDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { job, handleFormOpen } = this.props;

    return(
      <div>
        <p>{job.name}</p>
        <p>{job.position}</p>
        <p>{job.start}</p>
        <p>{job.end}</p>
        <button onClick={handleFormOpen}>Edit</button>
      </div>
    )
  }
}

export default JobDisplay