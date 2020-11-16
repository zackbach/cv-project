import React, { Component } from 'react';
import GeneralDisplay from './GeneralDisplay';
import GeneralForm from './GeneralForm';

class General extends Component {
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
    const { general, handleSubmit } = this.props;
    const formOpen = this.state.formOpen;
    
    let content;

    if (formOpen) {
      content = <GeneralForm general={general} handleFormClose={this.handleFormClose} handleSubmit={handleSubmit}/>
    } else {
      content = <GeneralDisplay general={general} handleFormOpen={this.handleFormOpen}/>
    }

    return(
      <div>
        {content}
      </div>
    )
  }
}

export default General