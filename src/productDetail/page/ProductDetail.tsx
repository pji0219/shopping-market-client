import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Product } from '../../common/types/products';
import Button from '../../common/components/Button';
import { cartActions } from '../../store/slice/cart';

type ProductDetailType = {
  product: Product;
};

const ProductDetail: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation().state as ProductDetailType;

  const {
    product: { id, image, title, description, category, price, options },
  } = location;

  const [selected, setSelected] = useState(options && options[0]);

  const optionsChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(event.target.value);

  const addToCartHandler = () => {
    const product = {
      id,
      image,
      title,
      price,
      quantity: 1,
      totalPrice: price,
      options: selected,
    };

    dispatch(cartActions.addProductToCart(product));
  };

  return (
    <Container>
      <img src={image} alt={title} />
      <div className='product_info'>
        <h2 className='title'>{title}</h2>
        <p className='price'>₩{price}</p>
        <p className='category'>{category}</p>
        <p className='description'>{description}</p>
        <label htmlFor='select'>옵션</label>
        <select id='select' onChange={optionsChangeHandler} value={selected}>
          {options &&
            options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
        </select>
        <Button
          text={'장바구니에 담기'}
          textsize={'18px'}
          height={'40px'}
          color={'#fff'}
          background={'blueviolet'}
          click={addToCartHandler}
        />
      </div>
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  display: flex;
  padding: 16px;

  & img {
    flex-basis: 60%;
    height: 500px;
  }

  & .product_info {
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    padding: 16px;
  }

  & .title {
    margin-bottom: 8px;
  }

  & .price {
    margin: 0;
    padding-bottom: 8px;
    font-size: 20px;
    border-bottom: 1px solid gray;
  }

  & .category {
    margin-bottom: 0;
  }

  & #select {
    margin-bottom: 8px;
    height: 40px;
  }
`;
