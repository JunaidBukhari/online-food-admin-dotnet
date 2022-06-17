import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  menu: [],
  cart: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, setMenu } = dataSlice.actions;

export default dataSlice.reducer;
