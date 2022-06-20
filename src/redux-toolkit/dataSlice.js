import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: [],
  cart: [],
  users: [],
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
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, setMenu, setUsers } = dataSlice.actions;

export default dataSlice.reducer;
