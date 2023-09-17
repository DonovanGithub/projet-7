import React from 'react';
const Banner = ({image, text}) => {
    return (
        <div>
            <div className='banner'>
            <h1 className ='bannerH1'>{text}</h1>
            <img className='bannerImage' src={image} alt="logo"/>
            </div>
        </div>
    );
};

export default Banner;