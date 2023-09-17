import React from 'react';
const Card = ({logement}) => {
    return (
        <div className='card'>
            <img className='card-image' src={logement.cover} alt='cover'></img>
            <h2 className='card-h2'>{logement.title}</h2>
        </div>
    );
};

export default Card;