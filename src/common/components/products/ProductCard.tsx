import React from 'react';
import styled from 'styled-components';
import { Product } from '../../types/products';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({
  product: { category, image, price, title },
}) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p>{category}</p>
    </Card>
  );
};

export default ProductCard;

const Card = styled.li`
  & img {
    width: 100%;
  }
  cursor: pointer;
`;
