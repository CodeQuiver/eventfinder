import React from 'react';
import Event from './Event.js';
import API from '../../utils/API.js';


// class EventDataContainer {
//     constructor(eventName) {
//         console.log("EventDataContainer.constructor: " + eventName);
//         this.eventName = eventName;
//     }
// }

class EventSearchResultContainer extends React.Component {
    state = {
        //using placeholder event query data until form is set up
        eventSearch : {
            zip : "",
            city : "Washington",
            state : "DC",            
            sorting : "best",
            category : "110",
            date : "next_week",
            price : "",
            keyword : ""
        },
        results : [],
        //eventData will later be an array of entries from the cleaned-up raw results data array above
        eventData: [],
        eventData1 : [
            {
            eventId: "default",
            eventName : 
                "November Evenings at the Edge: After Hours at the National Gallery of Art",
            eventDescription : 
                "From Light to Dark - It’s time to fall back and we're marking the change in seasons with pop-up talks, art making, and performances. Learn how to paint with light, stargaze on the Gallery’s rooftop terrace, and light up the dance floor with tunes from the sensational DJ Neekola and electric cellist Benjamin Gates. Pop-up talks will explore how artists use light and shadow to enhance their work. Specialty fare and beverages include black-and-white cookies and a dark-and-stormy-inspired cocktail. This program is made possible by a generous grant from The Morris and Gwendolyn Cafritz Foundation.",
            eventUrl : 
                "https://www.eventbrite.com/e/november-evenings-at-the-edge-after-hours-at-the-national-gallery-of-art-registration-50751269413?aff=ebapi",
            eventImg : 
                "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F50311872%2F144997575536%2F1%2Foriginal.jpg?auto=compress&s=b6262ff4b0cc2c260bb2797fbf61429c",
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
        }
    ]
    }

    //=========== =========== METHODS  =========== ===========//

    // search EventBrite method - sends API call via API.js
    searchEventBrite = (zip, city, state, sorting, category, date, price, keyword) => {
        API.eventSearch(zip, city, state, sorting, category, date, price, keyword)
            .then(res => {
                console.log("EVENTBRITE API RESPONSE: " + JSON.stringify(res));

                this.setState({ results: res.data.events });
                this.handleEventBriteResults(this.state.results);
                
            })
            .catch(err => console.log(err));
    };
    // END search EventBrite method


    //search DARKSKY weather method
        //TODO - ADD CREDIT TO DARKSKY SOMEWHERE ON PAGE
        // DARKSKY Icon info: icon
        // A machine-readable text summary of this data point, suitable for selecting an icon for display. If defined, this property will have one of the following values: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night. Be sure to also set a default.
        
        // 1- send API request
        // 2- get raw response and console log for testing
    weatherSearch = (latitude, longitude, dateTime) => {
        API.weatherSearch(latitude, longitude, dateTime)
            .then(res => {
                // console.log("DARKSKY API RESPONSE: " + JSON.stringify(res));
                return "DARKSKY API RESPONSE: " + JSON.stringify(res);

                // return this.handleDarkSkyResults(res);
                // 4- return weather object to whatever called the function
            })
            .catch(err => console.log(err));
    }
    //END search DARKSKY weather method
               


    //DARKSKY RESPONSE HANDLER METHOD
        // 3- process response to pull out values we want: weathDescrip, weathIcon, lowTemp, highTemp
        // 3a- in addition to already listed values, also pull "alert" block and extract "title" and "uri". This will only print if there's a value for it of course, but if there is it should output the alert title and link (e.g. Tornado Watch, link to weather service). Very important for planning!
        // 3b- optional- assign an icon to the weather found, but this should take low priority, leave blank for now
        
        //Output of this method should return an object like this: (temps default to degrees F, so no need to convert)
        // {
        //     weathDescrip : "light rain",
        //     weathIcon : "",
        //     lowTemp : 51.98,
        //     highTemp : 60.98
        //     alertTitle: "",
        //     alertURI: ""
        // }
    handleDarkSkyResults = (res) => {
        console.log("DARKSKY results handler function triggered.");
    }

    //END DARKSKY RESPONSE HANDLER METHOD

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



    //=========== =========== END METHODS =========== ===========//

  // When this component mounts, search the Eventbrite API based on the state
  componentDidMount() {
    this.searchEventBrite(this.state.eventSearch.zip, this.state.eventSearch.city, this.state.eventSearch.state, this.state.eventSearch.sorting, this.state.eventSearch.category, this.state.eventSearch.date, this.state.eventSearch.price, this.state.eventSearch.keyword)
  }

    renderOneEvent(myEvent) {
        return (
                <Event key={myEvent.eventId.toString()} eventData={myEvent} />
        );
    }

    renderAllItems() {
        const listItems = this.state.eventData.map(this.renderOneEvent);

        if (listItems.length == 0) { 
            return (<div>No results found.</div>);
        }

        return (<div>{listItems}</div>);
    }

    render() {
        return (
            <div>{
                this.renderAllItems()
            }</div>
        );
    }
}

export default EventSearchResultContainer;