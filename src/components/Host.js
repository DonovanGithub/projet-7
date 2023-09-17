import React from 'react';

const Host = ({logementhost}) => {
    return (
        <div className='host-container'>
             <img className='host-picture' src={logementhost.picture} alt='hostpicture'></img>
             <p className='host-name'>{logementhost.name}</p>
        </div>
    );
};

export default Host;