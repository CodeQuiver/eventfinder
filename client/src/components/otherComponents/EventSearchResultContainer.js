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

    //=========== =========== METHODS  =========== ===========//

    
    //search DARKSKY weather method- to be used inside event data processing in this component
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



    //=========== =========== END METHODS =========== ===========//


    renderOneEvent(myEvent) {
        return (
                <Event key={myEvent.eventId.toString()} eventData={myEvent} />
        );
    }

    renderAllItems() {
        const listItems = this.props.eventData.map(this.renderOneEvent);

        if (listItems.length === 0) { 
            return (<div>No results found.</div>);
        }

        return (
            <div>
                <div>{listItems}</div>
            </div>
            
            );
    }

    updateMyListLater = (newResults) => {
        console.log("new results = " + newResults.length.toString());
        //this.setState({results: newResults});
        this.handleEventBriteResults(newResults);
    }

    // User clicked submit button, now I must call my parent 
    // and then update my results state
    updateMyList = (event) => {
        this.props.handleFormSubmit(event, this.updateMyListLater);
    }

    render() {
        return (
            <div>
                {
                this.renderAllItems()
                }
            </div>
        );
    }
}

export default EventSearchResultContainer;