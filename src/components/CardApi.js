import React from 'react';

import Card from './Card';
import api from '../assets/logements.json'
import { NavLink } from 'react-router-dom';
const CardApi = () => {
    return (
        <div className='divcard'>
            <div className='logement'>
                {
                    api.map((api, index) => (
                        <NavLink key={api.id} to={'/logement/' + api.id}>
                            <Card key={index} logement={api} />
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default CardApi;