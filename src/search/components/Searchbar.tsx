import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { data } from '../../electronicProducts/page/Electronics';
import { AppDispatch, RootState } from '../../store';
import { productsActions } from '../../store/slice/products';
import { Product } from '../../common/types/products';

const Searchbar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products);
  const navigate = useNavigate();

  const searchedProducts = products.filter((product: Product) => {
    const query = searchParams.get('q') || '';
    return product.title.toLowerCase().includes(query.toLowerCase());
  });

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    navigate('/search');
    setSearchParams({ q: searchText });
    dispatch(productsActions.getProducts(searchedProducts));
  };

  return (
    <div>
      <input
        type='text'
        value={searchText}
        onChange={inputChangeHandler}
        placeholder='검색어를 입력하세요.'
      />
      <button onClick={searchHandler}>검색</button>
    </div>
  );
};

export default Searchbar;
