import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from './types';

type AuthStatus = 'authenticated' | 'notAuthenticated' | 'checking';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
}

const initialState: AuthState = {
  status: 'checking',
  token: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogIn: (state, action: PayloadAction<User>) => {
      state.status = 'authenticated';
      state.token = action.payload.token;
      console.log('ESTADO', state.status);
      console.log('ACTION DE LOGIN', action.payload.token);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.status = 'notAuthenticated';
      state.token = undefined;
      state.user = undefined;
    },
  },
});

export const { setLogIn, setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
