import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../Products/types';

interface FavoritesProducts {
  favoritesProducts?: Product[];
}

const initialState: FavoritesProducts = {
  favoritesProducts: [],
};

const favoritesSlice = createSlice({
  name: 'favoritesProducts',
  initialState,
  reducers: {
    addFavoriteProduct: (state, action) => {
      const favoriteProduct = { ...action.payload, favorite: true };

      state.favoritesProducts?.push(favoriteProduct);
    },

    removeFavoriteProduct: (state, action) => {
      const favoriteProductId = action.payload;

      const newFavoritesProducts = state.favoritesProducts?.filter(
        (product) => product.id !== favoriteProductId
      );

      state.favoritesProducts = newFavoritesProducts;
    },
  },
});

export const { addFavoriteProduct, removeFavoriteProduct } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
