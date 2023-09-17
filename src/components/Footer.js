import React from 'react';
import logo from "../assets/logoFooter.png"
const Footer = () => {
    return (
        <footer className='footer'>
            <img className='logoFooter' src={logo} alt="logo" />
            <p className='pFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;