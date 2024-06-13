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
    setFavoritesProducts: (state, action) => {
      const favoriteProduct = { ...action.payload };

      state.favoritesProducts?.push(favoriteProduct);
    },
  },
});

export const { setFavoritesProducts } = favoritesSlice.actions;

export default favoritesSlice.reducer;
