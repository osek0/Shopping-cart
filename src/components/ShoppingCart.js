import React from 'react';

const ShoppingCart = ({ cartItems, removeItem }) => {

  return (
    <div className="shoppingCart">
      {cartItems.map(item => {
        return (
          <div key={item.id} className="cardRow">
            <div className="cardImg">
              <p>{item.cartCount}</p>
              <img src={item.img} alt="hat" />
            </div>
            <div className="cardPrice">
              <p>{item.price}zł</p>
              <i 
                className="fas fa-times"
                onClick={() => removeItem(item.id)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;