import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import dataReducer from './dataSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    portfolioData: dataReducer,
  },
});
