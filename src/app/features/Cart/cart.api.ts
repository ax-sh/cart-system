import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type CartItem = any;
// console.log(8888,process.env.REACT_APP_API_URL)
export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getCartItems: builder.query<CartItem[], void>({
      query: () => "cart",
    }),
    getCartItem: builder.query<CartItem, number>({
      query: (photoId: number) => `photos/${photoId}`,
    }),
    addToCart: builder.mutation<CartItem, { data: any }>({
      query: ({ data }) => {
        console.log(888, data);
        return {
          url: `cart/`,
          method: "POST",
          body: "data",
        };
      },
    }),
    updateCartItem: builder.mutation<
      CartItem,
      { id: number; data: Partial<CartItem> }
    >({
      query: ({ id, data }) => {
        return {
          url: `cart/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetCartItemQuery,
  useUpdateCartItemMutation,
  useAddToCartMutation,
  useGetCartItemsQuery,
} = cartApi;
