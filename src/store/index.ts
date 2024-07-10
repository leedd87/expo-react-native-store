import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './features/Products/productsApiSlice';
import { categoriesApi } from './features/Categories/categoriesApiSlice';
import { authApi } from './features/Auth/authApiSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from './reducers/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [
  //   'authSlice',
  //   'cartSlice',
  //   'favoritesSlice',
  //   'productsSlice',
  //   '[categoriesApi.reducerPath]',
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware),
});

const persistor = persistStore(store);

export { persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
