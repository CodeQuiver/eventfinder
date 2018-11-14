import axios from "axios";
import { darksky } from "../config/keys";

// configuration
require('dotenv').config();


const BASEURL = "https://www.eventbriteapi.com/v3/events/search/?";
const APIKEY = "QOM53KU5KI63LIHHP4CR";

const WEATHAPIKEY = darksky.secret_key;

//hard-coding location as all of Washington DC for now because unclear on exact formatting needed for Eventbrite location searching to work
// const LOCATION = "Washington%2CDC%2CUSA";


// Export an object with a "search" method that searches the Eventbrite API with the category, date, price, and keyword parameters given
export default {
  eventSearchValidate: function(zip, city, state) {
    if (zip || (city && state)) {
      return true;
    }
    return false; 
  },
  
  eventSearch: function(zip, city, state, sorting, category, date, price, keyword) {
    let location = "";

    // sort_by=distance&location.address=Arlington%2C+VA
    // or sort by "best"
    console.log("API.eventSearch: city  = " + city.toString());
    console.log("API.eventSearch: state = " + state.toString());
    if (zip) {
      location = zip;
    } else if (city && state) {
      location = city + "%2C+" + state;
    } else {
      // TODO - Make this better
      console.log("Please add a location and try your search again.");
    } 

    // Build the Eventbrite api query using the received parameters from the form as the inputs
    const queryURL = BASEURL + "location.address=" + location + "&expand=organizer,ticket_availability,venue,logo&token=" + APIKEY + "&page=1&sort_by=" + sorting + "&categories=" + category + "&start_date.keyword=" + date + "&price=" + price + "&q=" + keyword + "&include_unavailable_events=false";
    console.log("EVENTBRITE QUERY URL: " + queryURL);

    return axios.get(queryURL);
  },
  weatherSearch: function(latitude, longitude, dateTime) {
      //DARKSKY weather API call goes here
      const weatherQueryURL = "https://api.darksky.net/forecast/" + WEATHAPIKEY + "/" + latitude + "," + longitude + "," + dateTime + "?exclude=currently,minutely,flags";
      console.log("DARKSKY QUERY URL: " + weatherQueryURL);

      return axios.get(weatherQueryURL);

      // TODO - replace Darksky API call with OpenWeather API call for now, as it allows client-side requests while Darksky is more strict about the calls coming from a secure backend. Darksky is ideal as it allows predicitons for any date, but will take more setup so is assigned to the next sprint cycle.
  }
};