import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LogementDisplay from '../components/LogementDisplay';
const Logement = () => {
    return (
        <div className='app'>
            <Header />
            <LogementDisplay />
            <Footer />
        </div>
    );
};

export default Logement;