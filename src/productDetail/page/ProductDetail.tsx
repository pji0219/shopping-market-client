import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Product } from '../../common/types/products';

type ProductDetailType = {
  product: Product;
};

const ProductDetail: React.FC = () => {
  const location = useLocation().state as ProductDetailType;

  const {
    product: { id, image, title, description, category, price, options },
  } = location;

  const [selected, setSelected] = useState(options && options[0]);

  const optionsChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(event.target.value);

  return (
    <Container>
      <img src={image} alt={title} />
      <div className='product_info'>
        {title}
        {description}
        {category}
        {price}
        {id}
        {selected}
      </div>
      <select name='' id='' onChange={optionsChangeHandler}></select>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  /* width: 100vw;
  height: 100vh; */
  display: flex;
  padding: 4px;

  & img {
    /* background-color: blue; */
    flex-basis: 70%;
  }

  & .product_info {
    display: flex;
    flex-direction: column;
    /* background-color: blueviolet; */
    flex-basis: 30%;
  }
`;
