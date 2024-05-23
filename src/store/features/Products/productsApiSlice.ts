import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from './types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => `/products`,
    }),
    getAllCategories: builder.query<[], void>({
      query: () => `/products/categories`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetAllCategoriesQuery } = productsApi;
