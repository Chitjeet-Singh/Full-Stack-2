import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from './store';

const CartView = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{  border: '3px solid #ffffff', padding: '1rem', borderRadius: '8px' }}>
      <h2>Your Cart 🛒</h2>
      <p>Items in cart: <strong>{cart.length}</strong></p>
      
      {cart.map((item, index) => (
        <div key={index} style={{ fontSize: '0.9rem' }}>
          {item.name} 
          <button 
            onClick={() => dispatch(removeItem(item.id))}
            style={{ marginLeft: '10px', padding: '2px 5px', background: 'red' }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartView;