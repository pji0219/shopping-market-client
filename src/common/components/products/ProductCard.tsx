import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Product } from '../../types/products';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({
  product,
  product: { id, category, image, price, title },
}) => {
  const navigate = useNavigate();

  const goDetailHandler = () => {
    navigate(`/product/${id}`, {
      state: { product },
    });
  };

  return (
    <Card onClick={goDetailHandler}>
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
