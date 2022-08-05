import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUsers = createAsyncThunk(
    'profileSlice/fetchUsers',
    async (_, { rejectWithValue }) => {

        const URL = 'https://steamscord-backend.vercel.app/api/data';

        try {
            const response = await fetch(URL);

            if (!response.ok) {
                throw new Error('Response: server error!');
            }

            const data = await response.json();

            return data;

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
        status: '',
        error: null,
        isUsersLoading: true
    },
    reducers: {
        getCurrentUser(state, action) {
            state.currentUser = action.payload;
        }
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.status = 'loading';
        },
        [fetchUsers.fulfilled.type]: (state, action) => {
            state.users = action.payload;
            state.isUsersLoading = false;
            state.status = 'success';
        },
        [fetchUsers.rejected.type]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
            state.isUsersLoading = false;
        }
    }
});

export const {
    getCurrentUser
} = profileSlice.actions;

export default profileSlice.reducer;