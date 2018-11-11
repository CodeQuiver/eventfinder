import React, { Component } from 'react';
import ResultsPage from './components/pages/ResultsPage/ResultsPage.js';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
M.AutoInit();


class App extends Component {
  render() {
    return (
      <div>
        
          <ResultsPage />

      </div>
    );
  }
}

export default App;
