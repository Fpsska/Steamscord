import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice"
import ChatReducer from "./ChatSlice"

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    ChatReducer: ChatReducer,
  },
});
