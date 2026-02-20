import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // List of products in cart
  },
  reducers: {
    // Procedure 3: Add item to cart
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    // Procedure 3: Remove item from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;