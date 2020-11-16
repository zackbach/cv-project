import React, { Component } from 'react';

class JobDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { job, handleFormOpen } = this.props;
    const startDate = new Date(job.start)
    const endDate = new Date(job.end)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return(
      <div className="mx-3">
        <p className="mb-0">{job.name}</p>
        <p className="mb-0">{job.position}</p>
        <p className="mb-2">Worked from {new Intl.DateTimeFormat('en-US', options).format(startDate)} to {new Intl.DateTimeFormat('en-US', options).format(endDate)}</p>
        <button onClick={handleFormOpen} className="btn btn-outline-primary mb-1">Edit</button>
      </div>
    )
  }
}

export default JobDisplay