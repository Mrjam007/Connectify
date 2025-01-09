import React from 'react';
import logo from '../../LOGO/Connectify LOGO.png'; // Adjust the path as necessary

function HomeButton() {
    return (
        <button className="home-button">
            <img src={logo} alt="Connectify Logo" className="home-logo" />
            Home
        </button>
    );
}

export default HomeButton; 