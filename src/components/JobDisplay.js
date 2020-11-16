import React, { Component } from 'react';

class JobDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { job, handleFormOpen } = this.props;

    return(
      <div className="mx-3">
        <p className="mb-0">{job.name}</p>
        <p className="mb-0">{job.position}</p>
        <p className="mb-2">Worked from {job.start} to {job.end}</p>
        <button onClick={handleFormOpen} className="btn btn-outline-primary mb-1">Edit</button>
      </div>
    )
  }
}

export default JobDisplay