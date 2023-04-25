import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import { profileSliceTypes, Iuser, Icomment } from 'types/profileSliceTypes';

import { fetchUsers } from 'app/api/fetchUsers';
import { fetchComments } from 'app/api/fetchComments';

import { generateRandomDate } from 'utils/helpers/generateRandomDate';

import { getRandomGameArrayItem } from '../../utils/helpers/getRandomGameArrayItem';


//  /. imports

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
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.usersFetchingStatus = 'loading';
                state.usersFetchingError = null;
            })
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<Iuser[]>) => {
                    state.users = action.payload;
                    state.users.map((item: Iuser) => {
                        item.gameActivity = state.gameActivity[getRandomGameArrayItem(state.gameActivity)];
                    });

                    state.usersFetchingStatus = 'success';
                }
            )
            .addCase(
                fetchUsers.rejected,
                (state, action: PayloadAction<any>) => {
                    state.usersFetchingError = action.payload;
                    state.usersFetchingStatus = 'failed';
                }
            )
            // /. get users data
            .addCase(fetchComments.pending, state => {
                state.commentsFetchingStatus = 'loading';
                state.commentsFetchingError = null;
            })
            .addCase(
                fetchComments.fulfilled,
                (state, action: PayloadAction<Icomment[]>) => {
                    const commentsArray = action.payload.map((item: any) => item.body);
                    const newComments = state.users.map(((item: any) => {
                        return {
                            id: item.steamid,
                            name: item.personaname,
                            avatar: item.avatarmedium,
                            comment: commentsArray[getRandomGameArrayItem(commentsArray)],
                            dateOfCreate: generateRandomDate()
                        };
                    }));
                    console.log(newComments);
                    state.comments = newComments;

                    state.commentsFetchingStatus = 'success';
                }
            )
            .addCase(
                fetchComments.rejected,
                (state, action: PayloadAction<any>) => {
                    state.commentsFetchingError = action.payload;
                    state.commentsFetchingStatus = 'failed';
                }
            );
    }
});

export const { getCurrentUser, switchDataLoadingStatus } = profileSlice.actions;

export default profileSlice.reducer;