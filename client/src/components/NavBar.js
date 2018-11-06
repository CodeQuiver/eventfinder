import React from 'react';

//handles changes between entire pages of app that user can choose from navbar- should include logo to take back to homepage
//and link to saved events
//setting up with plain html without styles for now, will add materialize later

const NavBar = props => (
    <ul>
        <li>
            <a href="">
                <img src="" alt="Home"/>
            </a>
        </li>
        <li>
            <a href="">
                Saved Events
            </a>
        </li>
    </ul>
);

export default NavBar;