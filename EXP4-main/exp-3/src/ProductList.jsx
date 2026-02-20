import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store';

const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Nintendo', price: 499.99 },
  { id: 3, name: 'Smartphone', price: 199.99 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ border: '3px solid #ddd', margin: '10px', padding: '15px' }}>
          <span>{product.name} - ${product.price}</span>
          <button style={{ marginLeft: '10px', padding: '5px 10px', background: '#ffffff', color: '#000000' }} onClick={() => dispatch(addItem(product))}> Add to Cart </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;