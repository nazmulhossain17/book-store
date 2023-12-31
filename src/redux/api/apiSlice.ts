import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nazmul-book-store-api.vercel.app/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<string[], void>({
      query: () => "api/books/all",
    }),
    singleProduct: builder.query<string, number>({
      query: (id) => `api/books/all/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useSingleProductQuery } = api;
