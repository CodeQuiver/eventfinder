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
    searchEventBrite = (zip, city, state, sorting, category, date, price, keyword, cb) => {
        if (API.eventSearchValidate(zip, city, state) == false) {
            return;
        }
        API.eventSearch(zip, city, state, sorting, category, date, price, keyword)
            .then(res => {
                console.log("EVENTBRITE API RESPONSE: " + JSON.stringify(res));
                console.log("NUM OF EVENTS = " + res.data.events.length);
                this.setState({ results: res.data.events });
                cb(res.data.events);
            })
            .catch(err => console.log(err));
    };
    // END search EventBrite method

    handleInputChange = event => {
        //const name = event.target.name;
        const name = event.target.id;
        const value = event.target.value;
        let eventSearch = this.state.eventSearch;
        if (name === "date-field") {
            eventSearch["date"] = value;
        } else if (name === "city-field") {
            eventSearch["city"] = value;
        } else if (name === "state-field") {
            eventSearch["state"] = value;
        } else if (name === "categories") {
            eventSearch["category"] = value;
        } else if (name === "price") {
            eventSearch["price"] = value;
        } else if (name === "priceSort") {
            eventSearch["sorting"] = value;
        } else if (name === "keyword") {
            eventSearch["keyword"] = value;
        } else {
            console.log("Results.handleInputChange: ignored event");
            return;
        }
        this.setState({eventSearch: eventSearch});
    };

    // TODO - Make this more REACT friendly
    handleFormSubmit = (event, cb) => {
        //event.preventDefault();
        //console.log(event);
        //console.log(this.state);
        this.searchEventBrite(
            this.state.eventSearch.zip,
            this.state.eventSearch.city, 
            this.state.eventSearch.state, 
            this.state.eventSearch.sorting, 
            this.state.eventSearch.category, 
            this.state.eventSearch.date, 
            this.state.eventSearch.price, 
            this.state.eventSearch.keyword, cb);
        return this.state.results;
    }
    //END METHODS//

    render() {
        return(
            <div>
                <SearchForm
                    eventSearch={this.state.eventSearch}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <EventSearchResultContainer
                    handleFormSubmit={this.handleFormSubmit} 
                    results={this.state.results} />
            </div>
            
        );
    }
}

export default ResultsPage;