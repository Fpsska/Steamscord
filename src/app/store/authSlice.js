import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authorizationSlice',
    initialState: {
        isAuthorized: false,
        userName: 'guest'
    },
    reducers: {
        login(state, action) {
            state.isAuthorized = true;
            state.userName = action.payload.name;
        },
        logOut(state) {
            state.isAuthorized = false;
            state.userName = '';
        }
    }
});

export const {
    login,
    logOut
} = authSlice.actions;

export default authSlice.reducer;