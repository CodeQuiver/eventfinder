import React from 'react';
import EventSearchResultContainer from '../../otherComponents/EventSearchResultContainer.js';
import SearchForm from '../../otherComponents/SearchForm.js';
import API from '../../../utils/API.js';

class ResultsPage extends React.Component {
    state = {
        //moving eventSearch state over from EventSearchResultContainer to here, will pass these as props on form submit
        eventSearch : {
            zip : "",
            city : "",
            state : "",            
            sorting : "",
            category : "",
            date : "",
            price : "",
            keyword : ""
        },
        results : []
    };


    //METHODS//

    // search EventBrite method - sends API call via API.js
    searchEventBrite = (zip, city, state, sorting, category, date, price, keyword) => {
        API.eventSearch(zip, city, state, sorting, category, date, price, keyword)
            .then(res => {
                console.log("EVENTBRITE API RESPONSE: " + JSON.stringify(res));

                this.setState({ results: res.data.events });
                
                
            })
            .catch(err => console.log(err));
    };
    // END search EventBrite method

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEventBrite(
            this.state.eventSearch.zip,
            this.state.eventSearch.city, 
            this.state.eventSearch.state, 
            this.state.eventSearch.sorting, 
            this.state.eventSearch.category, 
            this.state.eventSearch.date, 
            this.state.eventSearch.price, 
            this.state.eventSearch.keyword);
    }
    //END METHODS//

    render() {
        return(
            <div>
                <SearchForm
                    search={this.state.eventSearch}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <EventSearchResultContainer results={this.state.results} />
            </div>
            
        );
    }
}

export default ResultsPage;