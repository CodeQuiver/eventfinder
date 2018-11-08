import React from 'react';

//========= EVENT ==========//
class Event extends React.Component {
    // outlines div where a single event result prints
    // contains details for a single event

    // constructor
        //string or integer - ID
        //string - event title
        //string - location name
        //string - location address
        // eventLatitude
        // eventLongitude
        //string - description
        //string - image
        //boolean - available
        //boolean - paid/free
        //float - price
        //string - ticket url
        //object - class Weather - weather
        //object - class DateTime - StartDateTime
        //object - class DateTime - EndDateTime

    
    render(props) {
        return(
            <div className="Event event-div card medium horizontal col s12" id="event-0" data-lat="38.8904614" data-long="-77.01756410000002">
                <div className="card-image">

                    <img className="responsive-img"
                    
                    src={this.props.eventData.eventImg}
                    
                    alt={"Cover image for " + this.props.eventData.eventName}
                    
                    />

                </div>
                <div className="card-stacked">
                    <h5 className="card-title">
                        {this.props.eventData.eventName}
                    </h5>
                    
                    <div className="card-content left-align" style={{overflow: 'scroll'}} >
                        <p>
                            <span style={{fontWeight:'bold'}}>Starts: </span>
                            {this.props.eventData.startDateTime}
                        </p>
                        
                        <p>
                            <span style={{fontWeight:'bold'}}>Ends: </span>
                            {this.props.eventData.endDateTime}
                            
                        </p>
                        
                        <p>
                            <span style={{fontWeight:'bold'}}>Location: </span>
                            {this.props.eventData.eventVenueName}
                        </p>
                        
                        <p>
                            {this.props.eventData.eventAddress}
                        </p>
                        
                        <p>
                            <span style={{fontWeight:'bold'}}>Description: </span>
                            {this.props.eventData.eventDescription}
                            
                            <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp;
                        </p>
                        
                    </div>
                    
                    <div className="card-action white">
                        <div className="col s6 left-align cyan lighten-5" style={{margin:0 + 'px'}}>
                            <h5 className="left-align">
                                <i className="material-icons">cloud_done</i>
                                &nbsp;RAINCHECK&nbsp;
                                <i className="material-icons">cloud_done</i>
                            </h5>
                            
                            <small>Today's Weather at this location:</small>
                            
                            <div id="weather-div">
                                <div style={{fontSize: 20 + 'px', textTransform:'uppercase'}} >
                                    {this.props.eventData.eventWeather.weathDescrip}

                                    {this.props.eventData.eventWeather.weathIcon}
                                </div>
                                <span>
                                    <span style={{fontWeight:'bold'}}>Low:&nbsp;</span>
                                    {this.props.eventData.eventWeather.lowTemp}&nbsp;℉ |&nbsp; 
                                </span>
                                
                                <span>
                                    <span style={{fontWeight:'bold'}}>High:&nbsp;</span>
                                    {this.props.eventData.eventWeather.highTemp}&nbsp;℉ <br />
                                </span>
                            </div>
                        </div>
                            
                        <div className="col s6 right-align white" style={{margin:0 + 'px'}}>
                            <a href={this.props.eventData.eventUrl} target="_blank">
                                {this.props.eventData.ticketInfo}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
//========= END EVENT ==========//



//========= WEATHER =========//
// class Weather extends React.Component {
//     // contains weather data for an event
//     // constructor
//         //string - weather type
//         //string - icon (derived from weather type), optional
//         //float - hightemp
//         //float - lowtemp
//     render() {

//     }
        
// }
//========= END WEATHER =========//



//TODO- creating a test props object to be passed to the Event item when rendered in the page



export default Event;


/** backup of raw html pasted result code here:
 *             <div className="Event event-div card medium horizontal col s12" id="event-0" data-lat="38.8904614" data-long="-77.01756410000002">
                <div className="card-image">

                    <img className="responsive-img"
                    
                    src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F50473150%2F175032562964%2F1%2Foriginal.jpg?h=200&w=450&auto=compress&rect=0%2C0%2C2160%2C1080&s=19f63befd19bb00ad1837ed52578613e"
                    
                    alt={"Cover image for " + this.props.eventName}
                    
                    />

                </div>
                <div className="card-stacked">
                    <h5 className="card-title">
                       
                    </h5>
                    
                    <div className="card-content left-align" style="overflow:scroll;">
                        <p>
                            <span style="font-weight:bold;">Starts: </span>
                            Thu Nov 08 2018 18:00:00 GMT-0500 (Eastern Standard Time)
                        </p>
                        
                        <p>
                            <span style="font-weight:bold;">Ends: </span>
                            Thu Nov 08 2018 21:00:00 GMT-0500 (Eastern Standard Time)
                        </p>
                        
                        <p>
                            <span style="font-weight:bold;">Location: </span>
                            National Gallery of Art
                        </p>
                        
                        <p>
                            East Building 4th Street NW, Washington, DC 20565
                        </p>
                        
                        <p>
                            <span style="font-weight:bold;">Description: </span>

                            From Light to Dark
                            It’s time to fall back and we're marking the change in seasons with pop-up talks, art making, and performances. Learn how to paint with light, stargaze on the Gallery’s rooftop terrace, and light up the dance floor with tunes from the sensational DJ Neekola and electric cellist Benjamin Gates. Pop-up talks will explore how artists use light and shadow to enhance their work. Specialty fare and beverages include black-and-white cookies and a dark-and-stormy-inspired cocktail.
                            This program is made possible by a generous grant from The Morris and Gwendolyn Cafritz Foundation. 
                            
                            <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp; <br /> &nbsp;
                        </p>
                        
                    </div>
                    
                    <div className="card-action white">
                        <div className="col s6 left-align cyan lighten-5" style={{margin:0 + 'px'}}>
                            <h5 className="left-align">
                                <i className="material-icons">cloud_done</i>
                                &nbsp;RAINCHECK&nbsp;
                                <i className="material-icons">cloud_done</i>
                            </h5>
                            
                            <small>Today's Weather at this location:</small>
                            
                            <div id="weather-div">
                                <div style="font-size: 20px;text-transform: uppercase;">
                                    light rain
                                </div>
                                <span>
                                    <span style="font-weight:bold;">Low:&nbsp;</span>
                                    51.98&nbsp;℉ |&nbsp; 
                                </span>
                                
                                <span>
                                    <span style="font-weight:bold;">High:&nbsp;</span>
                                    60.98&nbsp;℉ <br />
                                </span>
                            </div>
                        </div>
                            
                        <div className="col s6 right-align white" style={{margin:0 + 'px'}}>
                            <a href="https://www.eventbrite.com/e/november-evenings-at-the-edge-after-hours-at-the-national-gallery-of-art-registration-50751269413?aff=ebapi" target="_blank">
                                Free Event, Register Here!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */