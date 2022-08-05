import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import chatReducer from './chatSlice';
import profileReducer from './profileSlice';

export default configureStore({
  reducer: {
    authReducer: authReducer,
    chatReducer: chatReducer,
    profileReducer: profileReducer
  }
});
