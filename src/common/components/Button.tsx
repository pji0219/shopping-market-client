import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  textsize?: string;
  width?: string;
  height?: string;
  click?: React.MouseEventHandler;
  bgcolor?: string;
  color?: string;
  background?: string;
  weight?: string;
};

const Button: React.FC<Props> = ({
  text,
  textsize,
  width,
  height,
  click,
  bgcolor,
  color,
  background,
  weight,
}) => {
  return (
    <Btn
      onClick={click}
      textsize={textsize}
      width={width}
      height={height}
      bgcolor={bgcolor}
      color={color}
      background={background}
      weight={weight}
    >
      {text}
    </Btn>
  );
};

export default Button;

type P = {
  textsize?: string;
  width?: string;
  height?: string;
  bgcolor?: string;
  color?: string;
  background?: string;
  weight?: string;
};

const Btn = styled.button<P>`
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  padding: 4px;
  border-radius: 4px;
  outline: none;
  border: none;
  background: ${({ background }) => background};
  font-size: ${({ textsize }) => textsize};
  font-weight: ${({ weight }) => weight};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
`;
