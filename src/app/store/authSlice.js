import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authorizationSlice',
    initialState: {
        userInformation: [],
        authStatus: false
    },
    reducers: {
        getUserNameValue(state, action) {
            state.userInformation = action.payload
        },
        switchAuthStatus(state, action) {
            state.AuthStatus = action.payload
        }
    }
})

export const { getUserNameValue, switchAuthStatus } = authSlice.actions;

export default authSlice.reducer;