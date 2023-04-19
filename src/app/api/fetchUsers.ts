import { createAsyncThunk } from '@reduxjs/toolkit';

// /. imports

export const fetchUsers = createAsyncThunk(
    'profileSlice/fetchUsers',
    async (_, { rejectWithValue }) => {
        const URL = 'https://steamscord-backend.vercel.app/api/data';

        try {
            const response = await fetch(URL);

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