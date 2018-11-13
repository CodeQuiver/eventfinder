import React, { Component } from 'react';
import ResultsPage from './components/pages/ResultsPage/ResultsPage.js';
import SearchForm from './components/otherComponents/SearchForm.js';



class App extends Component {
  render() {
    return (
      <div >
          <SearchForm />
        
          {/* <ResultsPage /> */}

      </div>
    );
  }
}

export default App;
