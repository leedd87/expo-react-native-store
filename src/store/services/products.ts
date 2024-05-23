import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getAllProducsts: builder.query<Product[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetAllProducstsQuery } = productsApi;
