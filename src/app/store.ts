import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import mainReducer from './slices/mainSlice';
import profileReducer from './slices/profileSlice';

// /.imports

const store = configureStore({
    reducer: {
        authReducer,
        mainReducer,
        profileReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;