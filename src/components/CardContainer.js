import React from 'react';
import Card from './Card';

// This component will probably be deleted in the future

const CardContainer = ({ updateCart }) => {
  return (
    <div className="cardContainer">
      <Card updateCart={updateCart} />
    </div>
  );
}

export default CardContainer;