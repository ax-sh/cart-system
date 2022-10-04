import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ICartItem = {
  id: number;
  name?: string;
  data: string;
  price: number;
};

export interface CartState {
  value: number;
  cartItems: ICartItem[];
}

const initialState: CartState = {
  value: 0,
  cartItems: [] as ICartItem[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      state.cartItems.push({
        id: state.cartItems.length,
        data: action.payload,
        price: 10,
      });
    },
    removeFromCart(state, { payload }: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((i) => i.id !== payload);
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeFromCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
