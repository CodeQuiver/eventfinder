import React from 'react';
import EventSearchResultContainer from './EventSearchResultContainer.js'; //importing so I can pass it props later for the API call

class SearchForm extends React.Component {

    render() {
        return(
            <div className = "SearchForm container">
                FORM GOES HERE
                <form action="#">
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" name="group1" type="radio"  />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" disabled="disabled" />
        <span>Brown</span>
      </label>
    </p>
  </form>
            </div>
        )
    }
}

export default SearchForm;