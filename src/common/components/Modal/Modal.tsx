import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';

import Button from '../Button';
import Backdrop from './Backdrop';

type Props = {
  show: boolean;
  click: React.MouseEventHandler;
};

const Modal: React.FC<Props> = ({ show, click }) => {
  return (
    <>
      {show && <Backdrop click={click} />}
      {show && <ModalOverlay />}
    </>
  );
};

export default Modal;

function ModalOverlay() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const [signinMode, setSigninMode] = useState(true);

  const chageModeHadler = () => {
    setSigninMode(!signinMode);
  };

  const idChageHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  };

  const passwordChageHadler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = {
      userId,
      password,
    };
    console.log(body);
  };

  const content = (
    <ModalContainer>
      <div className='modal-header'>
        <div className='logo'>
          <Logo />
          <h1>쇼핑마켓</h1>
        </div>
        <h2>{signinMode ? '로그인' : '회원가입'}</h2>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          onChange={idChageHadler}
          value={userId}
          placeholder='아이디'
        />
        <input
          type='password'
          onChange={passwordChageHadler}
          value={password}
          placeholder='비밀번호'
        />
        <div className='button-container'>
          <Button
            text={signinMode ? '로그인' : '회원가입'}
            textsize={'18px'}
            width={'300px'}
            height={'50px'}
            color={'#fff'}
            bgcolor={'blueviolet'}
          />
        </div>
      </form>
      <div className='change-mode'>
        <p className='signup-text'>
          {signinMode ? '계정이 없으신가요?' : '이미 가입하셨나요?'}
        </p>
        &nbsp;
        <Button
          text={signinMode ? '회원가입' : '로그인'}
          textsize={'17px'}
          background={'none'}
          click={chageModeHadler}
          color={'blueviolet'}
          weight={'bold'}
        />
      </div>
    </ModalContainer>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-hook') as HTMLElement,
  );
}

const ModalContainer = styled.div`
  width: 400px;
  height: 500px;
  position: fixed;
  z-index: 100;
  top: 10vh;
  left: 50vh;
  background-color: #fff;
  border-radius: 4px;

  & .modal-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    & .logo {
      color: blueviolet;
      display: flex;
      align-items: center;
    }

    & h2 {
      margin-top: 8px;
    }
  }

  & .change-mode {
    display: flex;
    justify-content: center;
    align-items: center;

    & .signup-text {
      font-size: 17px;
      color: gray;
    }
  }

  & form {
    margin-top: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    & input {
      height: 50px;
    }

    & .button-container {
      display: flex;
      justify-content: center;
      margin-top: 16px;
    }
  }
`;

const Logo = styled(FiShoppingBag)`
  font-size: 32px;
`;
