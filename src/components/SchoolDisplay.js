import React, { Component } from 'react';

class SchoolDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, handleFormOpen } = this.props;

    return(
      <div>
        <p>{school.name}</p>
        <p>{school.degree}</p>
        <p>{school.start}</p>
        <p>{school.end}</p>
        <button onClick={handleFormOpen}>Edit</button>
      </div>
    )
  }
}

export default SchoolDisplay