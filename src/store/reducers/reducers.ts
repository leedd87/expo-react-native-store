import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '../features/Auth/authApiSlice';
import { productsApi } from '../features/Products/productsApiSlice';
import { categoriesApi } from '../features/Categories/categoriesApiSlice';
import authSlice from '../features/Auth/authSlice';
import productsSlice from '../features/Products/productsSlice';
import favoritesSlice from '../features/Favorites/favoritesSlice';
import cartSlice from '../features/Cart/cartSlice';

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  authSlice,
  productsSlice,
  favoritesSlice,
  cartSlice,
});
