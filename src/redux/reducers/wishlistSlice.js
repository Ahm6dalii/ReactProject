import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter((course) => course.id !== action.payload.id);
    },
    clearWishlist: () => {
      return [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export let wishlistReducer = wishlistSlice.reducer;
