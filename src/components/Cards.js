import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>How Can We Assist You Today?</h1>
  
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/fertilizers.png'
              text='Tailored fertilizers and pesticides for your crop.'
              label='Options'
              path='/services'
            />
            <CardItem
              src='images/Seeds.png'
              text='Optimal seeds for your soil type.'
              label='Options'
              path='/services'
            />
            <CardItem
              src='images/Services.jpg'
              text='Seasonal crop recommendations synced with weather.'
              label='Options'
              path='/services'
            />
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default Cards;
