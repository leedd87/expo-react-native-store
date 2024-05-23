import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => `/products`,
    }),
    getSingleProduct: builder.query<Product, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
