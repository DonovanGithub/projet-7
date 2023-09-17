import React, { useEffect } from 'react';
import api from '../assets/logements.json'
import { useParams, useNavigate } from 'react-router-dom'
import Slideshow from './Slideshow';
import Tag from './Tag';
import Host from './Host';
import Collapse from './Collapse';
import Rate from './Rate';
const LogementDisplay = () => {
  const { id } = useParams()
  let selectedItem = api.find(item => item.id === id);
  const navigate = useNavigate()
  useEffect(() => {
    if (selectedItem === undefined) {
      navigate("404")
    }
  })


  return (
    selectedItem === undefined ? navigate("404") :
      <section>
        <Slideshow key={selectedItem?.id} logementid={selectedItem?.pictures} />
        <div className='logementDisplay'>
          <div className='display1'>
            <h1 className='logement-title'>{selectedItem?.title}</h1>
            <p className='logement-location'>{selectedItem?.location}</p>

            <div className='logement-tag-container'>{selectedItem?.tags.map((tag, index) => {
              return <Tag key={index} logementTags={tag} />
            })}</div>
          </div>
          <div className='display2'>
            <Host key={selectedItem?.host} logementhost={selectedItem?.host} />
            <Rate rating={selectedItem?.rating} />
          </div>
        </div>
        <div className='collapse'>
          <Collapse title="Description" description={selectedItem?.description} />
          <Collapse title="Equipment" description={
            selectedItem?.equipments.map((equipment, i) => {
              return (
                <ul key={i}>
                  <li className='equipment'>{equipment}</li>
                </ul>
              );
            })} />
        </div>
      </section>
  );
};

export default LogementDisplay;