import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './features/Products/productsApiSlice';
import { categoriesApi } from './features/Categories/categoriesApiSlice';
import productsSlice from './features/Products/productsSlice';

export const store = configureStore({
  reducer: {
    //ACA VAN LOS REDUCERS DE LA APP
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
