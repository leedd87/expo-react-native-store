import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from './features/Products/productsApiSlice';
import { categoriesApi } from './features/Categories/categoriesApiSlice';
import { authApi } from './features/Auth/authApiSlice';
import productsSlice from './features/Products/productsSlice';
import authSlice from './features/Auth/authSlice';
import favoritesSlice from './features/Favorites/favoritesSlice';
import cartSlice from './features/Cart/cartSlice';
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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'authSlice',
    'cartSlice',
    'favoritesSlice',
    'productsSlice',
    '[categoriesApi.reducerPath]',
  ],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  authSlice,
  productsSlice,
  favoritesSlice,
  cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer: {
  //   //ACA VAN LOS REDUCERS DE LA APP
  //   [authApi.reducerPath]: authApi.reducer,
  //   [productsApi.reducerPath]: productsApi.reducer,
  //   [categoriesApi.reducerPath]: categoriesApi.reducer,
  //   authSlice,
  //   productsSlice,
  //   favoritesSlice,
  //   cartSlice,
  // },
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
