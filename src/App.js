import React, { Component } from 'react'
import SchoolContainer from './components/SchoolContainer'
import JobContainer from './components/JobContainer'
import GeneralContainer from './components/GeneralContainer'

 class App extends Component {
  
  render() {
    return(
      <div>
        <h1 className="text-center mt-2"><strong>Resume Application</strong></h1>
        <div className="mx-3">
          <GeneralContainer />
          <br></br>
          <h2>Education</h2>
          <SchoolContainer />
          <br></br>
          <h2>Work Experience</h2>
          <JobContainer/>
        </div>
      </div>
    );
  }
}

export default App;

//TODO: ADD FORM VALIDATION, FIX GITHUB PAGES (NOT UP TO DATE)