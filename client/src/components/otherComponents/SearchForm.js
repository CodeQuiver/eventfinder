import React from 'react';
import EventSearchResultContainer from './EventSearchResultContainer.js'; //importing so I can pass it props later for the API call

class SearchForm extends React.Component {

    render() {
        return(
            <div className = "SearchForm container">
                <h5>
                    Search Upcoming Events in Your Area!
                </h5>
                    
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <select className="date" style={{display: 'block'}}>
                                    <option disabled selected>When</option>
                                    <option value="today">Today</option>
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="this_week">This Week</option>
                                    <option value="this_weekend">This Weekend</option>
                                    <option value="next_week">Next Week</option>
                                    <option value="next_month">Next Month</option>
                                </select>
                            </div>

                        </div>
                        <div className="row">
                            <select className="categories col s12" style={{display: 'block'}}>
                                <option value="">Type Of Event</option>
                                <option value="104">Film, Media &amp; Entertainment</option>
                                <option value="110">Food &amp; Drink</option>
                                <option value="103">Music</option>
                                <option value="101">Business &amp; Professional</option>
                                <option value="113">Community &amp; Culture</option>
                                <option value="104">Media &amp; Entertainment</option>
                                <option value="108">Sports &amp; Fitness</option>
                                <option value="107">Health &amp; Wellness</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                            This is an inline input field:
                            <div className="input-field inline">
                                <input id="email_inline" type="email" className="validate" />
                                <label for="email_inline">Email</label>
                                <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
        
            </div>
        )
    }
}

export default SearchForm;