import axios from "axios";

const BASEURL = "https://www.eventbriteapi.com/v3/events/search/?";
const APIKEY = "QOM53KU5KI63LIHHP4CR";

//hard-coding location as all of Washington DC for now because unclear on exact formatting needed for Eventbrite location searching to work
// const LOCATION = "Washington%2CDC%2CUSA";


// Export an object with a "search" method that searches the Eventbrite API with the category, date, price, and keyword parameters given
export default {
  eventSearch: function(location, category, date, price, keyword) {

    // Build the Eventbrite api query using the received parameters from the form as the inputs
    const queryURL = BASEURL + "location.address=" + location + "&expand=organizer,ticket_availability,venue,logo&token=" + APIKEY + "&page=1&sort_by=best&categories=" + category + "&start_date.keyword=" + date + "&price=" + price + "&q=" + keyword;
    console.log("EVENTBRITE QUERY URL: " + queryURL);

    return axios.get(queryURL);
  },

  weatherSearch: function(params) {
      //weather API call goes here
  }
};