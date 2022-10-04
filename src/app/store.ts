import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Cart/cart.slice";
import { cartApi } from "./features/Cart/cart.api";
import { productApi } from "./features/ProductsView/product.api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cartApi.middleware)
      .concat(productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
