import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  show: boolean;
};

const Modal: React.FC<Props> = ({ show }) => {
  return <>{show && <ModalOverlay show={show} />}</>;
};

export default Modal;

function ModalOverlay({ show }: Props) {
  const content = <h1>Modal {show}</h1>;

  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-hook') as HTMLElement,
  );
}
