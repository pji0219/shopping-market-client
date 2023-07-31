import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';

import Button from './Button';

type Props = {
  show: boolean;
};

const Modal: React.FC<Props> = ({ show }) => {
  return <>{show && <ModalOverlay />}</>;
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
        <p>
          쇼핑을 즐겨 보세요!
          <br />
          하단의 회원가입 버튼을 이용해 가입하실 수 있습니다.
        </p>
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
            textSize={'18px'}
            width={'400px'}
            height={'50px'}
          />
          <Button
            text={signinMode ? '회원가입으로' : '로그인으로'}
            textSize={'18px'}
            width={'400px'}
            height={'50px'}
            click={chageModeHadler}
          />
        </div>
      </form>
    </ModalContainer>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('modal-hook') as HTMLElement,
  );
}

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  position: fixed;
  z-index: 100;
  top: 10vh;
  left: 50vh;
  background-color: beige;

  & .modal-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid;

    & .logo {
      color: blueviolet;
      display: flex;
      align-items: center;
    }

    & p {
      margin: 0;
    }

    & h2 {
      margin-top: 8px;
    }
  }

  & form {
    margin-top: 16px;
    padding: 16px;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 6px;

    & input {
      height: 50px;
    }

    & .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      margin-top: 16px;
    }
  }
`;

const Logo = styled(FiShoppingBag)`
  font-size: 32px;
`;
