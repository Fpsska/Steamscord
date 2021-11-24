import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice"
import ProfileReducer from "./ProfileSlice"

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    ProfileReducer: ProfileReducer
  },
});
