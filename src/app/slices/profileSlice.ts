import { createSlice, createAsyncThunk, PayloadAction, current } from '@reduxjs/toolkit';

import { profileSliceTypes, Iuser } from 'types/profileSliceTypes';

import { getRandomGameArrayItem } from '../../utils/helpers/getRandomGameArrayItem';


//  /. imports

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

const initialState: profileSliceTypes = {
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

    commentsFetchingStatus: '',
    commentsFetchingError: null,

    isDataLoading: true
};

// /. initialState

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        getCurrentUser(state, action: PayloadAction<{ payloadID: string }>) {
            const { payloadID } = action.payload;
            console.log('action');
            // /. payload

            const user = state.users.find(
                (item: Iuser) => item.steamid === payloadID
            );
            if (user) {
                state.currentUser = [];
                state.currentUser.push(user);
            }
        },
        switchDataLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isDataLoading = action.payload;
        }
    },
    extraReducers: {
        [fetchComments.pending.type]: state => {
            state.commentsFetchingStatus = 'loading';
        },
        [fetchComments.fulfilled.type]: (state, action) => {
            state.comments = action.payload.map((item: any) => item.body);
            state.commentsFetchingStatus = 'success';
        },
        [fetchComments.rejected.type]: (state, action) => {
            state.commentsFetchingError = action.payload;
            state.commentsFetchingStatus = 'failed';
        },
        // /. get comments data
        [fetchUsers.pending.type]: state => {
            state.usersFetchingStatus = 'loading';
        },
        [fetchUsers.fulfilled.type]: (state, action) => {
            state.users = action.payload;
            state.users.map((item: any) => {
                item.comment =
                    state.comments[getRandomGameArrayItem(state.comments)];
            });

            state.usersFetchingStatus = 'success';
        },
        [fetchUsers.rejected.type]: (state, action) => {
            state.usersFetchingError = action.payload;
            state.usersFetchingStatus = 'failed';
        }
    }
});

export const { getCurrentUser, switchDataLoadingStatus } = profileSlice.actions;

export default profileSlice.reducer;