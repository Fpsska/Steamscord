import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authSliceTypes } from 'types/authSliceTypes';

//  /. imports


const storageAuthStatus = JSON.parse(
    localStorage.getItem('storageIsUserAuth') || 'false'
);
const storageUserRememberedStatus = JSON.parse(
    localStorage.getItem('storageIsUserRemembered') || 'false'
);
const storageUserData = JSON.parse(localStorage.getItem('storageUserData') || '{}');


const initialState: authSliceTypes = {
    isAuthorized: storageAuthStatus,
    isUserRemembered: storageUserRememberedStatus,
    login: storageUserData.login,
    password: storageUserData.password
};

// /. initialState

const authSlice = createSlice({
    name: 'authorizationSlice',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<{ login: string, password: string }>) {
            const { login, password } = action.payload;
            // /. payload

            state.isAuthorized = true;
            state.login = login;
            state.password = password;
        },
        logOut(state, action: PayloadAction<{ isTotalReset: boolean }>) {
            const { isTotalReset } = action.payload;
            // /. payload

            if (isTotalReset) {
                state.login = '';
                state.password = '';
                state.isAuthorized = false;
            } else {
                state.isAuthorized = false;
            }
        },
        switchUserRememberedStatus(state, action: PayloadAction<boolean>) {
            state.isUserRemembered = action.payload;
        }
    }
});

export const { signIn, logOut, switchUserRememberedStatus } = authSlice.actions;

export default authSlice.reducer;
