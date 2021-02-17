import React from 'react';
import Button from './reusableComponents/Button';

const CardInfo = ({ hatPrice, updateCart }) => {

  return (
    <div className="cardInfo">
      <p>{hatPrice}zł</p>
      <Button addItem={updateCart} />
    </div>
  );
}

export default CardInfo;