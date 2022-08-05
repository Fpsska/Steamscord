import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getRandomGameArrayItem } from '../../helpers/getRandomGameArrayItem';

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

        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

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

        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: {
        users: [],
        currentUser: [],
        comments: [],
        gameActivity: [
            'Counter-Strike: Global Offensive',
            'Worlds of Tanks',
            'Batman: The Enemy Within - The Telltale Series',
            'PUBG: BATTLEGROUNDS',
            'New World',
            'Apex Legends',
            'Dota 2',
            'Metro Exodus'
        ],
        timeZones: [
            '(UTC-06:00) Central America',
            '(UTC+07:00) Novosibirsk',
            '(UTC+04:00) Moscow, St. Petersburg, Volgograd',
            '(UTC+03:00) Minsk',
            '(UTC+06:00) Astana'
        ],
        usersFetchingStatus: '',
        usersFetchingError: null,
        isUsersLoading: true,

        commentsFetchingStatus: '',
        commentsFetchingError: null,
        isCommentsLoading: true
    },
    reducers: {
        getCurrentUser(state, action) {
            state.currentUser = action.payload;
        }
    },
    extraReducers: {
        [fetchComments.pending.type]: (state) => {
            state.commentsFetchingStatus = 'loading';
        },
        [fetchComments.fulfilled.type]: (state, action) => {
            state.comments = action.payload.map(item => item.body);
            // state.comments = state.comments.map(item => item.body);

            state.isCommentsLoading = false;
            state.commentsFetchingStatus = 'success';
        },
        [fetchComments.rejected.type]: (state, action) => {
            state.commentsFetchingError = action.payload;
            state.isCommentsLoading = false;
            state.commentsFetchingStatus = 'failed';
        },

        [fetchUsers.pending.type]: (state) => {
            state.usersFetchingStatus = 'loading';
        },
        [fetchUsers.fulfilled.type]: (state, action) => {
            state.users = action.payload;
            state.users.map(item => {
                item.comment = state.comments[getRandomGameArrayItem(state.comments)];
            });
            
            state.isUsersLoading = false;
            state.usersFetchingStatus = 'success';
        },
        [fetchUsers.rejected.type]: (state, action) => {
            state.usersFetchingError = action.payload;
            state.isUsersLoading = false;
            state.usersFetchingStatus = 'failed';
        }
    }
});

export const {
    getCurrentUser
} = profileSlice.actions;

export default profileSlice.reducer;