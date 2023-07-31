import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  textSize?: string;
  width?: string;
  height?: string;
  click?: React.MouseEventHandler;
};

const Button: React.FC<Props> = ({ text, textSize, width, height, click }) => {
  return (
    <Btn onClick={click} textSize={textSize} width={width} height={height}>
      {text}
    </Btn>
  );
};

export default Button;

type P = {
  textSize?: string;
  width?: string;
  height?: string;
};

const Btn = styled.button<P>`
  background-color: blueviolet;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  outline: none;
  border: none;
  font-size: ${({ textSize }) => textSize};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
`;
