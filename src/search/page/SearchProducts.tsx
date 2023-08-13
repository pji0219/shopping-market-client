import React from 'react';
import { useSelector } from 'react-redux';

import Products from '../../common/components/products/Products';
import { RootState } from '../../store';

const SearchProducts: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return <Products products={products} />;
};

export default SearchProducts;
