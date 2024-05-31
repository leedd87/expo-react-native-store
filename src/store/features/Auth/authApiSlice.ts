import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    logIn: builder.mutation<User, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: `/auth/login`,
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
});

export const { useLogInMutation } = authApi;
