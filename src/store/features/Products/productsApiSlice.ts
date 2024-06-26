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
      query: (id) => `/products/${id}`,
      transformResponse: (response: Product) => {
        return { ...response, stock: 5 };
      },
    }),
    addNewProduct: builder.mutation<Product, Partial<Product>>({
      query: ({ title, price, description, image, category }) => ({
        url: `/products`,
        method: 'POST',
        body: {
          title,
          price,
          description,
          image,
          category,
        },
      }),
      transformResponse: (response: { data: Product }) => {
        return response.data;
      },
    }),
    deleteProduct: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
} = productsApi;
