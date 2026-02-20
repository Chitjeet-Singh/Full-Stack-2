import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 101, name: "Lab Manual", price: 10 },
  { id: 102, name: "React Book", price: 20 }
];

export default function ShoppingApp() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Products</h2>
      {products.map(p => (
        <button key={p.id} onClick={() => addToCart(p)}>Buy {p.name}</button>
      ))}

      <hr />
      <h2>Cart Count: {cart.length}</h2> {/* Procedure 4: Display count */}
      {cart.map(item => (
        <div key={item.id}>
          {item.name} <button onClick={() => removeFromCart(item.id)}>x</button>
        </div>
      ))}
    </div>
  );
}