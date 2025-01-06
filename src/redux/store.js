import { configureStore } from '@reduxjs/toolkit'
import progressBarReducer from './features/progressBarSlice';

export const store = configureStore({
  reducer: {
    progressBar: progressBarReducer,
  },
})