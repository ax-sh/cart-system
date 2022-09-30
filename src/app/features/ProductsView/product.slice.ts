import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  value: number;
}

const initialState: ProductState = {
  value: 0,
};

export const productSlice = createSlice({
  initialState,
  name: "product",
  reducers: {
    productTrigger() {},
  },
});

export const { productTrigger } = productSlice.actions;
export default productSlice.reducer;
