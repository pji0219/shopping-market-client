import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Product } from '../../common/types/products';

type State = {
  products: Product[];
};

const initialState: State = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state: State, action: PayloadAction<Product[]>) => ({
      products: [...action.payload],
    }),
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
