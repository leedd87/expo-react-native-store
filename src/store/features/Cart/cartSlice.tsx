import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../Products/types';

interface CartProducts {
  cartProducts?: Product[];
}

const initialState: CartProducts = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
    addCartProduct: (state, action) => {
      const cartProduct = { ...action.payload };

      state.cartProducts?.push(cartProduct);
    },
  },
});

export const { addCartProduct } = cartSlice.actions;

export default cartSlice.reducer;
