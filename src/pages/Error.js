import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='app'>
            <Header />
            <h1 className='error-404'>404</h1>
            <br />
            <h2 className='error-h2'>Oups ! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/">
                <p className='error-navlink'>Retournez à la page d'accueil</p>
            </NavLink>
            <Footer />
        </div>
    );
};

export default Error;