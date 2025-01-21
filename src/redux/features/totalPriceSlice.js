import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: 0,  
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    incrementPrice: (state, action) => {
      // Increases the price by a specified amount (default is 1)
      state.price += action.payload || 1;
    },
    decrementPrice: (state, action) => {
      // Decreases the price by a specified amount (default is 1)
      state.price -= action.payload || 1;
    },
  },
});

// Export the actions
export const { setPrice, incrementPrice, decrementPrice } = priceSlice.actions;

// Export the reducer to configure the store
export default priceSlice.reducer;
