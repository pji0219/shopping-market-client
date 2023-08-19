import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';

import Button from './Button';
import Modal from './Modal/Modal';
import Searchbar from '../../search/components/Searchbar';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <Modal show={show} click={showHandler} />
      <Header>
        <HomeLink to='/'>
          <Logo />
          <h1>쇼핑마켓</h1>
        </HomeLink>
        <nav>
          <Link to='/clothes'>의류</Link>
          <Link to='/electronics'>전자제품</Link>
          <Searchbar />
          <Button
            text={'로그인/회원가입'}
            textsize={'18px'}
            color={'#fff'}
            background={'blueviolet'}
            padding={'4px'}
            click={showHandler}
          />
        </nav>
      </Header>
    </>
  );
};

export default Navbar;

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 8px 24px;

  & nav {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;

    & a:visited {
      color: black;
    }
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  color: blueviolet;

  &:visited {
    color: blueviolet;
  }
`;

const Logo = styled(FiShoppingBag)`
  font-size: 32px;
`;
