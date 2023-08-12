import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type Props = {
  click: React.MouseEventHandler;
};

const Backdrop: React.FC<Props> = ({ click }) => {
  return ReactDOM.createPortal(
    <BackGround onClick={click}></BackGround>,
    document.getElementById('backdrop-hook') as HTMLElement,
  );
};

export default Backdrop;

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(117, 117, 117, 0.45);
  z-index: 10;
`;
