import React from 'react';

const Button = ( { addItem } ) => {
  return (
    <button onClick={addItem}>
      Add to cart
    </button>
  )
}

export default Button;