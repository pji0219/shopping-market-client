import { Product } from './../common/types/products';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    getProducts(state: State, action: PayloadAction<Product[]>) {
      return {
        products: [...action.payload],
      };
    },
  },
});

export default productsSlice.reducer;
