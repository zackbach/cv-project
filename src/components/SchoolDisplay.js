import React, { Component } from 'react';

class SchoolDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, handleFormOpen } = this.props;

    return(
      <div className="mx-3">
        <p className="mb-0">{school.name}</p>
        <p className="mb-0">{school.degree}</p>
        <p className="mb-2">Attended from {school.start} to {school.end}</p>
        <button onClick={handleFormOpen} className="btn btn-outline-primary mb-1">Edit</button>
      </div>
    )
  }
}

export default SchoolDisplay