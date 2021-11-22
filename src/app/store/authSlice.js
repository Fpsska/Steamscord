import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authorization",
    initialState: {
        userInformation: [],
        AuthStatus: false
    },
    reducers: {
        getUserNameValue(state, action) {
            console.log("Slicer:", action.payload);
            state.userInformation = action.payload
        },
        switchAuthStatus(state, action) {
            console.log("Slicer:", action.payload);
            state.AuthStatus = action.payload
        }
    }
})

export const { getUserNameValue, switchAuthStatus } = authSlice.actions;

export default authSlice.reducer;