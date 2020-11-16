import React, { Component } from 'react'
import SchoolContainer from './components/SchoolContainer'
import JobContainer from './components/JobContainer'
import GeneralContainer from './components/GeneralContainer'

 class App extends Component {
  
  render() {
    return(
      <div>
        <h1>Resume Application</h1>
        <h2>General Info</h2>
        <GeneralContainer />
        <h2>Education</h2>
        <SchoolContainer />
        <h2>Work Experience</h2>
        <JobContainer />
      </div>
    );
  }
}

export default App;