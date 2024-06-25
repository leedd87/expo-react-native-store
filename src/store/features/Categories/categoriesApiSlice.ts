import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<[], void>({
      query: () => `/products/categories`,
    }),
    getSingleCategory: builder.query<[], string>({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetSingleCategoryQuery } =
  categoriesApi;
