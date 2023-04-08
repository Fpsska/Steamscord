import { createSlice } from '@reduxjs/toolkit';

//  /. imports

const initialState: any = {
    isAuthorized: false,
    userName: 'guest'
};

// /. initialState

const authSlice = createSlice({
    name: 'authorizationSlice',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthorized = true;
            state.userName = action.payload.name;
        },
        logOut(state) {
            state.isAuthorized = false;
            state.userName = 'guest';
        }
    }
});

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer;
