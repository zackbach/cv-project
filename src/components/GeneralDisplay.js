import React, { Component } from 'react';

class GeneralDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { general, handleFormOpen } = this.props;

    return(
      <div>
        <p>{general.fName}</p>
        <p>{general.lName}</p>
        <p>{general.email}</p>
        <p>{general.phone}</p>
        <button onClick={handleFormOpen}>Edit</button>
      </div>
    )
  }
}

export default GeneralDisplay