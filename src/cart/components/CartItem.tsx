import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { cartActions } from '../../store/slice/cart';

type Props = {
  product: {
    id: string;
    price: number;
    quantity: number;
    totalPrice: number;
    title: string;
    image: string;
    options: string;
  };
};

const CartItem: React.FC<Props> = ({
  product: { id, price, totalPrice, quantity, title, image, options },
}) => {
  const dispatch = useDispatch();

  const plusHandler = () => {
    const product = {
      id,
      price,
      totalPrice,
      quantity,
      title,
      image,
      options,
    };

    dispatch(cartActions.addProductToCart(product));
  };

  const minusHandler = () => {
    if (quantity === 1) return;
    dispatch(cartActions.minusProductFromCart(id));
  };

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <Container>
      <img src={image} alt={title} />
      <div className='item-info'>
        <div className='description'>
          <p>{title}</p>
          <p>
            ₩{price} x {quantity} = ₩{totalPrice}
          </p>
          <p>옵션: {options}</p>
        </div>
        <div className='control-btns'>
          <PlusBtn onClick={plusHandler} />
          <span>{quantity}</span>
          <MinusBtn onClick={minusHandler} />
          <RemoveBtn onClick={removeHandler} />
        </div>
      </div>
    </Container>
  );
};

export default CartItem;

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;

  & img {
    width: 192px;
    border-radius: 4px;
  }

  & .item-info {
    display: flex;
    flex: 1 1 0%;
    justify-content: space-between;
    margin-left: 16px;

    & .description {
      flex-basis: 60%;
      & p {
        font-size: 17px;
      }
    }

    & .control-btns {
      display: flex;
      align-items: center;
      font-size: 24px;
    }
  }
`;

const PlusBtn = styled(AiOutlinePlusSquare)`
  cursor: pointer;
`;
const MinusBtn = styled(AiOutlineMinusSquare)`
  cursor: pointer;
`;

const RemoveBtn = styled(RiDeleteBin5Fill)`
  cursor: pointer;
`;
