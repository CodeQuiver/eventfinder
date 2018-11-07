import React from 'react';

//========= EVENT ==========//
class Event extends React.Component {
    // contains event id
    // outlines div where a single event result prints
    // renders "EventDetails"
    
    
    render() {
        <EventDetails />
    }
}
//========= END EVENT ==========//



//========= EVENT DETAILS ==========//
class EventDetails extends React.Component {
// contains details for an event
// constructor
    //string - event title
    //string - location
    //string - description
    //string - image
    //boolean - available
    //boolean - paid/free
    //float - price
    //string - ticket url
    //object - class Weather - weather
    //object - class DateTime - StartDateTime
    //object - class DateTime - EndDateTime

}
//========= END EVENT DETAILS ==========//



//========= WEATHER =========//
class Weather extends React.Component {
    // contains weather data for an event
    // constructor
        //string - weather type
        //string - icon (derived from weather type), optional
        //float - hightemp
        //float - lowtemp
        
}
//========= END WEATHER =========//







export default Event;