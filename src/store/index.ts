import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './slice/products';
import cartSlice from './slice/cart';

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
