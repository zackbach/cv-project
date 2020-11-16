import React, { Component } from 'react';
import JobDisplay from './JobDisplay';
import JobForm from './JobForm';

class Job extends Component {
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
    const { job, handleSubmit } = this.props;
    const formOpen = this.state.formOpen;
    
    let button;
    let content;

    if (formOpen) {
      content = <JobForm job={job} handleFormClose={this.handleFormClose} handleSubmit={handleSubmit}/>
    } else {
      content = <JobDisplay job={job} handleFormOpen={this.handleFormOpen}/>
    }

    return(
      <div>
        {content}
        <button onClick={() => this.props.handleDelete(job.index)}>Delete</button>
      </div>
    )
  }
}

export default Job