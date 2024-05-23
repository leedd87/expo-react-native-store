import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from './types';

interface AllProducts {
  allProducts?: Product[];
}

const initialState: AllProducts = {
  allProducts: undefined,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
