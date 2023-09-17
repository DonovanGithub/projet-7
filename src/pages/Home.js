import React from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import CardApi from '../components/CardApi';
import BannerImg from '../assets/image1.png'
const Home = () => {
    return (
        <div className='app'>
            <Header />
            <Banner image = {BannerImg} text ="Chez vous, partout et ailleurs" />
            <CardApi />
            <Footer />
        </div>
        
    );
};

export default Home;