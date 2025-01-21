import { createSlice } from "@reduxjs/toolkit";

// Retrieve the current step from local storage or default to 1
const savedStep = parseInt(localStorage.getItem("currentStep"), 10) || 1;

const initialState = {
  currentStep: savedStep,  
  totalSteps: 5,          // Total steps in the form
};

const progressBarSlice = createSlice({
  name: "progressBar",
  initialState,
  reducers: {
    incrementStep: (state) => {
      if (state.currentStep < state.totalSteps) {
        state.currentStep += 1;
        localStorage.setItem("currentStep", state.currentStep);  
      }
    },
    decrementStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
        localStorage.setItem("currentStep", state.currentStep);  
      }
    },
    resetStep: (state) => {
      state.currentStep = 1;
      localStorage.setItem("currentStep", state.currentStep);  
    },
  },
});

export const { incrementStep, decrementStep, resetStep } = progressBarSlice.actions;

export default progressBarSlice.reducer;

