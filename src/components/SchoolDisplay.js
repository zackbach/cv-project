import React, { Component } from 'react';

class SchoolDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, handleFormOpen } = this.props;
    const startDate = new Date(school.start)
    const endDate = new Date(school.end)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return(
      <div className="mx-3">
        <p className="mb-0">{school.name}</p>
        <p className="mb-0">{school.degree}</p>
        <p className="mb-2">Attended from {new Intl.DateTimeFormat('en-US', options).format(startDate)} to {new Intl.DateTimeFormat('en-US', options).format(endDate)}</p>
        <button onClick={handleFormOpen} className="btn btn-outline-primary mb-1">Edit</button>
      </div>
    )
  }
}

export default SchoolDisplay