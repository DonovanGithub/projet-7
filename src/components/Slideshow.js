import React, { useState } from 'react';
import arrowL from '../assets/left-arrow.png'
import arrowR from '../assets/right-arrow.png'

const Slideshow = ({ logementid }) => {
  const [currentImg, setCurrentImg] = useState(0)
  const nextSlide = () => {
    setCurrentImg(currentImg === logementid.length - 1 ? 0 : currentImg + 1)
  }
  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? logementid.length - 1 : currentImg - 1)
  }
  return (
    <div className="carousel">
      {logementid.length === 1 ? "":<p className='countDisplay'>{currentImg + 1}/{logementid.length}</p>}
      {logementid.length === 1 ? "" : <img onClick={prevSlide} className='leftarrow' src={arrowL} alt='leftarrow'></img>}
      {logementid.length === 1 ? "" : <img onClick={nextSlide} className='rightarrow' src={arrowR} alt='rightarrow'></img>}

      {logementid.map((logement, index) => (
        currentImg === index && (
          <img className='logementimage' key={index} src={logement} alt='logement'></img>
        )))}
    </div>
  );
};

export default Slideshow
  ;