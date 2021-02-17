import React from 'react';
import CardBg from './CardBg';
import CardInfo from './CardInfo';
import HatData from './HatsData';

const Card = ({ updateCart }) => {
  
  return (
    <>
      {HatData.map(({cardImg, cardPrice}, index) => {
        return (
          <div key={index} className="card">
            <CardBg hatImg={cardImg} />
            <CardInfo 
              hatPrice={cardPrice} 
              updateCart={() => updateCart(cardImg, cardPrice)}  
            />
        </div>
        );
      })}
    </> 
  );
}

export default Card;