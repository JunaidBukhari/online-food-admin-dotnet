import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  menu: [
    {
      id: 1,
      title: 'Grilled Chicken Shawarma',
      price: 250,
      image:
        'https://hips.hearstapps.com/vidthumb/images/190130-chicken-shwarma-horizontal-1551285400.png',
    },
    {
      id: 2,
      title: 'Pizza',
      price: 450,
      image:
        'https://mahatmarice.com/wp-content/uploads/2020/04/Rice-Pizza-Crust.jpg',
    },
    {
      id: 3,
      title: 'Zinger Burger',
      price: 200,
      image:
        'https://mir-s3-cdn-cf.behance.net/projects/original/75cabb95034859.Y3JvcCw3NTgsNTkzLDI3NCwxNTU.jpg',
    },
    {
      id: 4,
      title: 'Chicken Biryani',
      price: 200,
      image: 'https://hamariweb.com/recipes/images/recipeimages/3.jpg',
    },
    {
      id: 5,
      title: 'Tandoori Chicken Wrap',
      price: 350,
      image:
        'https://static.toiimg.com/thumb/62194857.cms?width=1200&height=900',
    },
    {
      id: 6,
      title: 'Grilled Fish',
      price: 550,
      image: 'https://hamariweb.com/recipes/images/recipeimages/70962.jpg',
    },
  ],
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
export const { addToCart } = dataSlice.actions;

export default dataSlice.reducer;
