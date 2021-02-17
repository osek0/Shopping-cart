import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Nav from './Nav';
import Container from './reusableComponents/Container';
import CardContainer from './CardContainer';
import ShoppingCartContainer from './ShoppingCartContainer';

const Hero = () => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  
  const updateCart = (hatImg, hatPrice) => {
    setItemCount(prevCount => prevCount + 1);
    setTotalPrice(prevPrice => prevPrice + hatPrice);
    
    if(cartItems.find(item => item.img === hatImg)){
      const result = cartItems.find(item => item.img === hatImg);
      result.cartCount++;
      return;
    }

    setCartItems([
      ...cartItems, 
      {
        img: hatImg,
        price: hatPrice,
        id: uuidv4(),
        cartCount: 1
      }
    ])
  }

  const removeItem = (id) => {
    const newItems = cartItems.filter(cartItem => cartItem.id !== id);
    setCartItems(newItems);

    const itemCountResult = newItems.reduce(
      (prev, curr) => prev += curr.cartCount,
      0
    );

    setItemCount(itemCountResult);
    
    const priceResult = newItems.reduce(
      (prev, curr) => prev += curr.price * curr.cartCount,
      0
    );

    setTotalPrice(priceResult);
  }

  return (
    <section className="hero">
      <Nav 
        hiddenMenu={hiddenMenu} 
        setHiddenMenu={setHiddenMenu}
        itemCount={itemCount}
      />
      <Container>
        <CardContainer updateCart={updateCart} />
        <ShoppingCartContainer 
          hiddenMenu={hiddenMenu} 
          cartItems={cartItems}
          totalPrice={totalPrice}
          itemCount={itemCount}
          removeItem={removeItem}
        />
      </Container>
    </section>
  );
}

export default Hero;