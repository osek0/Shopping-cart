import React from 'react';
import ShoppingCart from './ShoppingCart';
import TotalPrice from './TotalPrice';

const ShoppingCartContainer = props => {
  const { hiddenMenu, cartItems, totalPrice, itemCount, removeItem } = props;

  return (
    <div className={`shoppingCartContainer ${!hiddenMenu ? "" : "hidden"}`}>
      <ShoppingCart cartItems={cartItems} removeItem={removeItem} />
      <TotalPrice totalPrice={totalPrice} itemCount={itemCount}/>
    </div>
  );
}

export default ShoppingCartContainer;