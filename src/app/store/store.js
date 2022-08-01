import { configureStore } from '@reduxjs/toolkit';

import { steamAPI } from '../api/steamAPI';

import authReducer from './authSlice';
import chatReducer from './chatSlice';
import profileReducer from './profileSlice';

export default configureStore({
  reducer: {
    authReducer: authReducer,
    chatReducer: chatReducer,
    profileReducer: profileReducer,
    [steamAPI.reducerPath]: steamAPI.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(steamAPI.middleware);
  }
});
