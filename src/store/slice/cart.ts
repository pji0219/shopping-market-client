import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartProduct = {
  id: string;
  price: number;
  quantity: number;
  totalPrice: number;
  title: string;
  image: string;
  options: string;
};

type State = {
  products: CartProduct[];
};

const initialState: State = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state: State, action: PayloadAction<CartProduct>) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        product => product.id === newProduct.id,
      );

      if (!existingProduct) {
        state.products.push({
          ...newProduct,
        });
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + newProduct.price;
      }
    },
    minusProductFromCart(state: State, action: PayloadAction<string>) {
      const id = action.payload;
      const existingProduct = state.products.find(product => product.id === id);

      if (existingProduct) {
        existingProduct.quantity--;
        existingProduct.totalPrice =
          existingProduct.totalPrice - existingProduct.price;
      }
    },
    removeFromCart(state: State, action: PayloadAction<string>) {
      const id = action.payload;
      state.products = state.products.filter(product => product.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
