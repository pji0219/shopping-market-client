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
  padding?: string;
  margin?: string;
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
  padding,
  margin,
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
      padding={padding}
      margin={margin}
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
  padding?: string;
  margin?: string;
};

const Btn = styled.button<P>`
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
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
