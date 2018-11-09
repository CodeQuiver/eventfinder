import React from 'react';
import Event from './Event.js';
import API from '../../utils/API.js';

class EventSearchResultContainer extends React.Component {
    state = {
        //using placeholder event query data until form is set up
        eventSearch : {
            location : "Washington%2CDC%2CUSA",
            category : "110",
            date : "tomorrow",
            price : "",
            keyword : ""
        },
        results : [],
        //eventData will later be an array of entries from the cleaned-up raw results data array above
        eventData : [{
            eventName : 
                "November Evenings at the Edge: After Hours at the National Gallery of Art",
            eventDescription : 
                "From Light to Dark - It’s time to fall back and we're marking the change in seasons with pop-up talks, art making, and performances. Learn how to paint with light, stargaze on the Gallery’s rooftop terrace, and light up the dance floor with tunes from the sensational DJ Neekola and electric cellist Benjamin Gates. Pop-up talks will explore how artists use light and shadow to enhance their work. Specialty fare and beverages include black-and-white cookies and a dark-and-stormy-inspired cocktail. This program is made possible by a generous grant from The Morris and Gwendolyn Cafritz Foundation.",
            eventUrl : 
                "https://www.eventbrite.com/e/november-evenings-at-the-edge-after-hours-at-the-national-gallery-of-art-registration-50751269413?aff=ebapi",
            eventImg : 
                "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F50473150%2F175032562964%2F1%2Foriginal.jpg?h=200&w=450&auto=compress&rect=0%2C0%2C2160%2C1080&s=19f63befd19bb00ad1837ed52578613e",
            ticketsLeft : 
                "",
            ticketPrice : 
                "",
            startDateTime : 
                "Thu Nov 08 2018 18:00:00 GMT-0500 (Eastern Standard Time)",
            endDateTime : 
                "Thu Nov 08 2018 21:00:00 GMT-0500 (Eastern Standard Time)",
            eventVenueName : "National Gallery of Art",
            eventAddress : "East Building 4th Street NW, Washington, DC 20565",
            eventLatitude : "",
            eventLongitude : "",
            eventWeather : {
                weathDescrip : "light rain",
                weathIcon : "",
                lowTemp : 51.98,
                highTemp : 60.98
            },
            ticketInfo : "Free Event, Register Here!"
        }]
    }

    //=========== =========== METHODS  =========== ===========//

    // search EventBrite method - sends API call via API.js
    searchEventBrite = (location, category, date, price, keyword) => {
        API.eventSearch(location, category, date, price, keyword)
            .then(res => {
                console.log("EVENTBRITE API RESPONSE: " + JSON.stringify(res));
            this.setState({ results: res.data.events });
            this.handleEventBriteResults(this.state.results);
            })
            .catch(err => console.log(err));
    };
    // END search EventBrite method


    // handle EventBrite Results method - contains logic to translate raw results from EventBrite into formatted data to be passed to the output div
    handleEventBriteResults = (rawResults) => {
        // make a copy of the results array with slice()
        // manipulate data as needed and push each finalized object into new array
        // setState of eventData to the new array
        let startingArray = rawResults.slice();
        let endingArray = [];

        const thisEvent = startingArray[0];
        console.log("HANDLE EVENTBRITE RESULTS OUTPUT thisEvent: " + JSON.stringify(thisEvent));

    };
    // END handle EventBrite Results method



    //=========== =========== END METHODS =========== ===========//

  // When this component mounts, search the Eventbrite API based on the state
  componentDidMount() {
    this.searchEventBrite(this.state.eventSearch.location, this.state.eventSearch.category, this.state.eventSearch.date, this.state.eventSearch.price, this.state.eventSearch.keyword)
  }

    render() {
        return(
            <div>
               
                <Event eventData={this.state.eventData[0]} />
            </div>
            
        );
    }
}

export default EventSearchResultContainer;