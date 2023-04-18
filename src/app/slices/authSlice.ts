import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authSliceTypes } from 'types/authSliceTypes';

//  /. imports


const initialState: authSliceTypes = {
    isAuthorized: false,
    userName: 'guest'
};

// /. initialState

const authSlice = createSlice({
    name: 'authorizationSlice',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ login: string }>) {
            const { login } = action.payload;
            // /. payload

            state.isAuthorized = true;
            state.userName = login;
        },
        logOut(state) {
            state.isAuthorized = false;
            state.userName = 'guest';
        }
    }
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
