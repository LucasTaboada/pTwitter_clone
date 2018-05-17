import React from 'react';
import '../style/Nav.css'

const Nav = () => (
    <div className="Nav">
        <ul className="Nav__List">
            <li className="Nav__ListItem">Home</li>
            <li className="Nav__ListItem">Moments</li>
            <li className="Nav__ListItem">Notifications</li>
            <li className="Nav__ListItem">Messages</li>
        </ul>
    </div>
);

export default Nav;
