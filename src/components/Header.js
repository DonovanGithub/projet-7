import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logoHeader.png"
const Header = () => {
    return (
        <header className='navigation'>
            <NavLink to="/">
            <img className='logoHeader' src={logo} alt='logo' />
            </NavLink>
            <div className='navigation-p'>
                <NavLink to="/">
                    <p>Accueil</p>
                </NavLink>
                <NavLink to='/about'>
                    <p>À propos</p>
                </NavLink>
            </div>
        </header>
    );
};
export default Header;