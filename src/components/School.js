import React, { Component } from 'react';
import SchoolDisplay from './SchoolDisplay';
import SchoolForm from './SchoolForm';

class School extends Component {
  constructor(props) {
    super(props);

    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);

    this.state = {
      formOpen: false,
    }
  }

  handleFormOpen = () => {
    this.setState({formOpen: true});
  }

  handleFormClose = () => {
    this.setState({formOpen: false})
  }

  render() {
    const { school, handleSubmit } = this.props;
    const formOpen = this.state.formOpen;
    
    let button;
    let content;

    if (formOpen) {
      content = <SchoolForm school={school} handleFormClose={this.handleFormClose} handleSubmit={handleSubmit}/>
    } else {
      content = <SchoolDisplay school={school} handleFormOpen={this.handleFormOpen}/>
    }

    return(
      <div>
        {content}
        <button onClick={() => this.props.handleDelete(school.index)} className="btn btn-outline-danger mx-3 mb-3">Delete</button>
      </div>
    )
  }
}

export default School