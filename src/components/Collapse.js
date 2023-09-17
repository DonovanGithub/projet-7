import React, { useState } from 'react';
import lowarrow from '../assets/downside-arrow.png'
import toparrow from '../assets/upside-arrow.png'
const Collapse = ({title, description}) => {
    const [toggle, setToggle] = useState(false);
    const collaps = () =>{
        setToggle(!toggle);
    }
    return (

        <div className='collapse-container'>
            <div className='collapse-box'>
            <article className='collapse-box-title'>
                <p className='collapse-title'>{title}</p>
                <p onClick={collaps}>
                {toggle ? (
                <img src={toparrow} alt='arrow'/>
                ) :
                <img src={lowarrow} alt='arrow'/>
                }
                </p>
            </article>
            </div>
            {toggle ?(
            <div className='collapse-text'>{description}</div>
            ): toggle }
        </div>
    );
};

export default Collapse;