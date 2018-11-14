import React from 'react';

class SearchForm extends React.Component {


    render() {
        return(
            <div className = "SearchForm container">
                <h4 className="center-align">
                    Search Upcoming Events in Your Area!
                </h4>
                
                {/* EVENT SEARCH FORM */}
                <div className="row">
                    <form className="col s12">


                        {/* REQUIRED FORM SECTIONS */}

                        {/* WHEN */}
                        <div className="row">
                            <div className="input-field col s12">
                                <select id="date-field" className="date"
                                onChange={this.props.handleInputChange}
                                
                                required="required" style={{display: 'block'}}>
                                    <option disabled selected>When? (required)</option>
                                    <option value="today">Today</option>
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="this_week">This Week</option>
                                    <option value="this_weekend">This Weekend</option>
                                    <option value="next_week">Next Week</option>
                                    <option value="next_month">Next Month</option>
                                </select>
                            </div>
                        </div>
                        {/* END WHEN */}

                        {/* WHERE */}
                        <div class="row">
                            <div class="input-field col m8 s12">
                                <input placeholder="City" id="city-field" type="text" required="required" class="validate"
                                onChange={this.props.handleInputChange}
                                value={this.props.eventSearch.city} />
                                <label for="city-field">Where? (required)</label>
                            </div>

                            <div className="input-field col m4 s12">
                                <select id="state-field" className="date" required="required"
                                onChange={this.props.handleInputChange}
                                style={{display: 'block'}}>
                                    <option disabled selected>State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>
                        </div>
                        {/* END WHERE */}

                        {/* END REQUIRED FORM SECTIONS */}

                        {/* EVENT CATEGORY */}
                        <div className="row">
                            <div className="input-field col s12">
                                <select id="categories" className="categories"
                                onChange={this.props.handleInputChange}
                                style={{display: 'block'}}>
                                    <option selected>Type Of Event</option>
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
                        </div>
                        {/* END EVENT CATEGORY */}

                        
                        <div className="row">
                            {/* EVENT PRICE */}
                            <div className="input-field col m6 s12">
                                <select id="price" className="price"
                                onChange={this.props.handleInputChange}
                                style={{display: 'block'}}>
                                    <option selected>Price</option>
                                    <option value="free">Free Event</option>
                                    <option value="paid">Paid Event</option>
                                    <option value="">Both</option>
                                </select>
                            </div>
                            {/* END EVENT PRICE */}

                            {/* SORT BY */}
                            <div className="input-field col m6 s12">
                                <select id="priceSort" className="price"
                                onChange={this.props.handleInputChange} 
                                style={{display: 'block'}}>
                                    <option selected>Sort Results By:</option>
                                    <option value="best">Best Match (default)</option>
                                    <option value="paid">Distance</option>
                                    <option value="date">Date</option>
                                </select>
                            </div>
                            {/* END SORT BY */}
                        </div>


                        {/* SEARCH KEYWORD */}
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="keyword"
                                onChange={this.props.handleInputChange}
                                value={this.props.eventSearch.keyword}
                                type="text" className="validate" />
                                <label for="keyword">Keyword to Search (optional) - e.g. "Salsa"</label>
                            </div>
                        </div>
                        {/* END SEARCH KEYWORD*/}

                        {/* SUBMIT BUTTON */}
                        <button class="btn waves-effect waves-light" 
                        type="submit" id="submit"
                         name="action" onClick={this.props.handleFormSubmit} >
                         Submit
                        </button>
                        {/* END SUBMIT BUTTON */}
                    </form>
                    {/* END EVENT SEARCH FORM */}
                </div>

        
            </div>
        )
    }
}

export default SearchForm;