import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px' }}>
      <h2>Your Cart ({cartItems.length} items)</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        cartItems.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price} 
            <button onClick={() => dispatch(removeFromCart(item.id))}> Remove </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;