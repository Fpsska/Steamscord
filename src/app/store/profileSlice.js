import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: {
        currentUser: []
    },
    reducers: {
        getCurrentUser(state, action) {
            state.currentUser = action.payload;
        }
    }
});

export const {
getCurrentUser
} = profileSlice.actions;

export default profileSlice.reducer;