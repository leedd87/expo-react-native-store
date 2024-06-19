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
      state.allProducts = action.payload.map((producto: Product) => ({
        ...producto,
        favorite: false,
      }));
    },
    toggleFavoriteProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.allProducts?.find((p) => p.id === productId);
      product!.favorite = !product?.favorite;
    },
  },
});

export const { setAllProducts, toggleFavoriteProduct } = productsSlice.actions;

export default productsSlice.reducer;
