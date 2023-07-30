import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  click?: React.MouseEventHandler;
};

const Button: React.FC<Props> = ({ text, click }) => {
  return <Btn onClick={click}>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  background-color: blueviolet;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
