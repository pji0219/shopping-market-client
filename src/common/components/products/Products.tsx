import React from 'react';
import styled from 'styled-components';

import { Product } from '../../types/products';
import ProductCard from './ProductCard';

type Props = {
  products: Product[] | undefined;
};

const Products: React.FC<Props> = ({ products }) => {
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
