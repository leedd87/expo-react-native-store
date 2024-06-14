import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './features/Products/productsApiSlice';
import { categoriesApi } from './features/Categories/categoriesApiSlice';
import { authApi } from './features/Auth/authApiSlice';
import productsSlice from './features/Products/productsSlice';
import authSlice from './features/Auth/authSlice';
import favoritesSlice from './features/Favorites/favoritesSlice';
import cartSlice from './features/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    //ACA VAN LOS REDUCERS DE LA APP
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    authSlice,
    productsSlice,
    favoritesSlice,
    cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
