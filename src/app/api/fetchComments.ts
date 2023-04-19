import { createAsyncThunk } from '@reduxjs/toolkit';

// /. imports

export const fetchComments = createAsyncThunk(
    'profileSlice/fetchComments',
    async (_, { rejectWithValue }) => {
        const limit = 20;
        const URL = `https://jsonplaceholder.typicode.com/comments?&_limit=${limit}`;

        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error('Response: server error!');
            }

            const commentsData = await response.json();

            return commentsData;
        } catch (err: any) {
            return rejectWithValue(err.message);
        }
    }
);