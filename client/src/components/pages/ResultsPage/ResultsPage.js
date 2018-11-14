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
        results : [],
        eventData: []
    };


    //METHODS//

    // search EventBrite method - sends API call via API.js
    searchEventBrite = (zip, city, state, sorting, category, date, price, keyword) => {
        if (API.eventSearchValidate(zip, city, state) === false) {
            return;
        }
        API.eventSearch(zip, city, state, sorting, category, date, price, keyword)
            .then(res => {
                console.log("EVENTBRITE API RESPONSE: " + JSON.stringify(res));
                console.log("NUM OF EVENTS = " + res.data.events.length);
                this.setState({ results: res.data.events });
                this.handleEventBriteResults(res.data.events);
                //cb(res.data.events);
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
    handleFormSubmit = (event) => {
        event.preventDefault();
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
            this.state.eventSearch.keyword);
        return this.state.results;
    }


    // handle EventBrite Results method - contains logic to translate raw results from EventBrite into formatted data to be passed to the output div
    handleEventBriteResults = (rawResults) => {
        // make a copy of the results array with slice()
        // manipulate data as needed and push each finalized object into new array
        // setState of eventData to the new array
        let startingArray = rawResults.slice();
        let endingArray = [];

        // const thisEvent = startingArray[0];
        // console.log("HANDLE EVENTBRITE RESULTS OUTPUT thisEvent: " + JSON.stringify(thisEvent));

        // FOR loop- for each event result:
        for (let i = 0; i < startingArray.length; i++) {
            const thisEvent = startingArray[i];
            //console.log("HANDLE EVENTBRITE RESULTS OUTPUT thisEvent index " + i + " : " + JSON.stringify(thisEvent));
            //===========get each value and store in variable================//

            // event name
            let eventName = thisEvent.name.text;
            console.log("name: " + eventName);

            // description in text or html depending which line we comment out
            // if we want it in the html tags, comment out the text line and instead use:
            // let eventDescription = thisEvent.description.html;
            let eventDescription = thisEvent.description.text;
            // console.log("description: " + eventDescription);

            // url for eventbrite listing
            let eventUrl = thisEvent.url;
            // console.log("url: " + eventUrl);

            // event image- under "logo"
            console.log("HANDLE EVENTBRITE RESULTS OUTPUT thisEvent index " + i + " : " + JSON.stringify(thisEvent));
            let eventImg = "./images/default_event_image.jpg";
            if (thisEvent.logo && thisEvent.logo.original && thisEvent.logo.original.url) {
                eventImg = thisEvent.logo.original.url;
            }
            // console.log("picture url: " + eventImg);

            // TICKET INFO LOGIC
            // ticket availability, true or false- TODO- INSERT "if" PART OF FUNCTION RESULT
            let ticketsLeft = thisEvent.ticket_availability.has_available_tickets;

                if (ticketsLeft === false) {
                    continue; // if there are no tickets left to this event, skip the rest of loop entirely and move on to the next event in list.           
                } else if (ticketsLeft === true) {
                    ticketsLeft = "Tickets Available Here";
                }

            // ticket price if applicable
            let ticketPrice = thisEvent.ticket_availability.minimum_ticket_price.display;
            // console.log("tickets start at: " + ticketPrice);

            let ticketInfo = "none";
            
            
            const ticketTextLogic= () => {
                if (ticketsLeft && ticketPrice && ticketPrice!=="0.00 USD") {
                    // if tickets are left and the price is specified
                    return ticketsLeft + ", starting at $" + ticketPrice + ".";
                } 
                else if (ticketsLeft && thisEvent.is_free===true) {
                    return "Free Event, Register Here!";
                    }
                else if (ticketsLeft) {
                    return ticketsLeft + "!";
                }
                else{
                    return "Full Event Listing";
                }
            }

            ticketInfo = ticketTextLogic();

            
                //if none of the conditions apply, set ticktInfo to the text above- ticketInfo contains the text that will be printed on the event listing link, so this is the default text
            // END TICKET INFO LOGIC
            
            // time and date
                // get time and date of event in local timezone- ex. "2018-07-07T11:00:00"
                let startDateStr = thisEvent.start.local;
                // translate to user-friendly format
                let startDateTime = new Date(startDateStr);

                let endDateStr = thisEvent.end.local;
                let endDateTime = new Date(endDateStr);

                // let dateTime = "Starts: " + startDateTime + "Ends: " + endDateTime;
                // console.log("Date and Time: " + dateTime);

            // location- name and address
            let eventVenueName = thisEvent.venue.name;
            // console.log("venue name: " + eventVenueName);

            let eventAddress = thisEvent.venue.address.localized_address_display;
            // console.log("address: " + eventAddress);

            // latitude and longitude
            let eventLatitude = thisEvent.venue.latitude;
            let eventLongitude = thisEvent.venue.longitude;
            // console.log("latitude, longitude: " + eventLatitude + ", " + eventLongitude);

            //TODO - Weather function call here, placeholder data for now
            // console.log(this.weatherSearch(-77.03, 38.9, this.startDateStr)); //TESTING API call
            
            //EVENT WEATHER PLACEHOLDER HERE
            let eventWeather = {
                weathDescrip : "light rain",
                weathIcon : "",
                lowTemp : 51.98,
                highTemp : 60.98
            }

            
            // CONSTRUCTOR FOR EVENT - construct object for each event result
            function EventDataItem(eventId, eventName, eventDescription, eventUrl, eventImg, ticketsLeft, ticketPrice, startDateTime, endDateTime, eventVenueName, eventAddress, eventLatitude, eventLongitude, ticketInfo, eventWeather) {
                console.log("EventDataItem: " + eventName);
                this.eventId = eventId;
                this.eventName = eventName;
                this.eventDescription = eventDescription;
                this.eventUrl = eventUrl;
                this.eventImg = eventImg;
                this.ticketsLeft = ticketsLeft;
                this.ticketPrice = ticketPrice;
                this.startDateTime = (startDateTime).toString();
                this.endDateTime = (endDateTime).toString();
                this.eventVenueName = eventVenueName;
                this.eventAddress = eventAddress;
                this.eventLatitude = eventLatitude;
                this.eventLongitude = eventLongitude;
                this.ticketInfo = ticketInfo;
                this.eventWeather = eventWeather;
            };
            // END CONSTRUCTOR FOR EVENT

            // call constructor instance
            const instanceEventDataItem = new EventDataItem(i, eventName, eventDescription, eventUrl, eventImg, ticketsLeft, ticketPrice, startDateTime, endDateTime, eventVenueName, eventAddress, eventLatitude, eventLongitude, ticketInfo, eventWeather);
            
            console.log("Test " + i + ": " + instanceEventDataItem.eventName);
            console.log("New Array entry event Data for index " + i + " : " + JSON.stringify(instanceEventDataItem));

            // push object to endingArray
            endingArray.push(instanceEventDataItem);
        }

        console.log("===============Full ending array of event results: " + JSON.stringify(endingArray));
        

        // setState eventData equal to endingArray
        this.setState({eventData : endingArray});

        console.log("======================================= NEW EVENT DATA STATE : " + JSON.stringify(this.state.eventData) );
        

    };
    // END handle EventBrite Results method
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
                    eventData={this.state.eventData} />
            </div>
            
        );
    }
}

export default ResultsPage;