import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import mainReducer from './mainSlice';
import profileReducer from './profileSlice';

export default configureStore({
  reducer: {
    authReducer: authReducer,
    mainReducer: mainReducer,
    profileReducer: profileReducer
  }
});
