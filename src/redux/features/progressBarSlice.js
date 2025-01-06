import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1,  // Initial step
  totalSteps: 4,   // Total steps in the form
};

const progressBarSlice = createSlice({
  name: 'progressBar',
  initialState,
  reducers: {
    incrementStep: (state) => {
      if (state.currentStep < state.totalSteps) {
        state.currentStep += 1;
      }
    },
    decrementStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
  },
});

export const { incrementStep, decrementStep } = progressBarSlice.actions;

export default progressBarSlice.reducer;
