import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = any;
// console.log(8888,process.env.REACT_APP_API_URL)

export type ProductSortBy = "recent" | "popular";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductSortBy>({
      query: (sortBy: ProductSortBy) => `products/?sort-by=${sortBy}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
