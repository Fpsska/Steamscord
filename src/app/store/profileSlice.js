import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profileSlice',
    initialState: {
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
        ]
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