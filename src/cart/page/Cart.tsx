import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.quantity}</p>
          <p>{product.price}</p>
          <p>{product.totalPrice}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
