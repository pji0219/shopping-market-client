import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  price: number;
};

const PriceCard: React.FC<Props> = ({ text, price }) => {
  return (
    <Container>
      <p>{text}</p>
      <p className='price'>₩{price}</p>
    </Container>
  );
};

export default PriceCard;

const Container = styled.div`
  padding: 8px;
  margin: 0 2px;
  border-radius: 4px;
  text-align: center;
  font-size: 20px;

  & .price {
    font-weight: bold;
    color: blueviolet;
  }
`;
