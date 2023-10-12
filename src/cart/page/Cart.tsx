import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';

import { RootState } from '../../store';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import Button from '../../common/components/Button';

const SHIPPING = 3000;

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const totalPrice = products.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0,
  );

  if (products.length === 0) return <p>장바구니에 상품이 없습니다.</p>;

  return (
    <Container>
      <p className='title'>내 장바구니</p>
      <ul>
        {products.map(product => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className='total-price'>
        <PriceCard text={'상품 총액'} price={totalPrice} />
        <Plus />
        <PriceCard text={'배송비'} price={SHIPPING} />
        <Equal />
        <PriceCard text={'합계'} price={totalPrice + SHIPPING} />
      </div>
      <Button
        text={'주문하기'}
        textsize={'17px'}
        height={'50px'}
        bgcolor={'blueviolet'}
        color={'#fff'}
      />
    </Container>
  );
};

export default Cart;

const Container = styled.section`
  padding: 8px;
  display: flex;
  flex-direction: column;

  & .title {
    font-size: 18px;
    text-align: center;
    border-bottom: 1px solid lightgray;
  }

  & ul {
    border-bottom: 1px solid darkgray;
    margin-bottom: 8px;
    padding: 4px;
  }

  & .total-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    padding: 0 2px;
  }
`;

const Plus = styled(BsFillPlusCircleFill)`
  flex-shrink: 0;
`;

const Equal = styled(FaEquals)`
  flex-shrink: 0;
`;
