import React from 'react';
import styled from 'styled-components';

import { ProductItems } from '../types/products';
import ProductCard from './ProductCard';

const Products: React.FC<ProductItems> = ({ products }) => {
  return (
    <ProductList>
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductList>
  );
};

export default Products;

const ProductList = styled.ul`
  display: grid;
  padding: 16px 24px;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;
