import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice"
import chatReducer from "./chatSlice"
import { steamAPI } from '../api/steamAPI';

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    chatReducer: chatReducer,
    [steamAPI.reducerPath]: steamAPI.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(steamAPI.middleware)
  }
});
