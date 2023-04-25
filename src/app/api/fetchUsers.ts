import { createAsyncThunk } from '@reduxjs/toolkit';

// /. imports

export const fetchUsers = createAsyncThunk(
    'profileSlice/fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_USERS_FETCH_URL}`);

            if (!response.ok) {
                throw new Error('Response: server error!');
            }

            const usersData = await response.json();

            return usersData;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);