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
        stock: 5,
      }));
    },
    toggleFavoriteProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const product = state.allProducts?.find((p) => p.id === productId);
      product!.favorite = !product?.favorite;
    },

    filterByCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;

      const productsByCategory = state.allProducts?.filter(
        (product) => product.category === category
      );

      state.allProducts = productsByCategory;
    },
  },
});

export const { setAllProducts, toggleFavoriteProduct, filterByCategory } =
  productsSlice.actions;

export default productsSlice.reducer;
