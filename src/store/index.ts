import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './features/Products/productsApiSlice';

export const store = configureStore({
  reducer: {
    //ACA VAN LOS REDUCERS DE LA APP
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
