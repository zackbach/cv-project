import React, { Component } from 'react';

class GeneralDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { general, handleFormOpen } = this.props;

    return(
      <div className="mx-3">
        <h2 className="mb-1 ml-n3">{general.fName} {general.lName}</h2>
        <p className="mb-0">{general.email}</p>
        <p className="mb-2">{general.phone}</p>
        <button onClick={handleFormOpen} className="btn btn-outline-primary">Edit</button>
      </div>
    )
  }
}

export default GeneralDisplay