import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = { id: string; name: string; price: number; image: string };

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
