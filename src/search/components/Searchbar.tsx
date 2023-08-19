import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { AppDispatch } from '../../store';
import { productsActions } from '../../store/slice/products';
import { Product } from '../../common/types/products';
import { data } from '../../electronicProducts/page/Electronics';
import Button from '../../common/components/Button';

const Searchbar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const searchedProducts = data.filter((product: Product) => {
    const query = searchParams.get('product') || '';
    return product.title.toLowerCase().includes(query.toLowerCase());
  });

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    navigate('/search');
    setSearchParams({ product: searchText });
    dispatch(productsActions.getProducts(searchedProducts));
  };

  useEffect(() => {
    dispatch(productsActions.getProducts(searchedProducts));
  }, [dispatch, searchedProducts]);

  return (
    <Container>
      <SearchBar
        type='text'
        value={searchText}
        onChange={inputChangeHandler}
        placeholder='검색어를 입력하세요.'
      />
      <Button
        text={'검색'}
        click={searchHandler}
        bgcolor={'blueviolet'}
        color={'#fff'}
        textsize={'18px'}
        margin={'0'}
        padding={'4px'}
      />
    </Container>
  );
};

export default Searchbar;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  margin: 1px;
  height: 25px;
`;
