import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import { profileSliceTypes, Ifriend, Imessage } from 'types/profileSliceTypes';

import { fetchUsers } from 'app/api/fetchUsers';
import { fetchComments } from 'app/api/fetchComments';

import { generateRandomDate } from 'utils/helpers/generateRandomDate';

import { getRandomGameArrayItem } from '../../utils/helpers/getRandomGameArrayItem';


//  /. imports

const initialState: profileSliceTypes = {
    friends: [],
    currentUser: [],
    messages: [],
    gameActivity: [
        'Counter-Strike: Global Offensive',
        'Worlds of Tanks',
        'World of Warcraft',
        'PUBG: BATTLEGROUNDS',
        'New World',
        'Apex Legends',
        'Dota 2',
        'Metro Exodus',
        'Overwatch',
        'Sea of Thieves',
        'Grand Theft Auto V',
        'War Thunder'
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

    isDataLoading: true,
    isMessageCreated: null
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

            const user = state.friends.find(
                (item: Ifriend) => item.id === payloadID
            );
            if (user) {
                state.currentUser = [];
                state.currentUser.push(user);
            }
        },
        createNewMessage(state, action: PayloadAction<{ message: Imessage }>) {
            const { message } = action.payload;
            // /. payload

            state.messages.push(message);
        },
        deleteSpecificMessage(state, action: PayloadAction<{ payloadID: string }>) {
            const { payloadID } = action.payload;
            // /. payload

            const messageIDX = state.messages.findIndex(message => message.id === payloadID);
            if (messageIDX) {
                state.messages.splice(messageIDX, 1);
            }
        },
        switchMessageCreatedStatus(state, action: PayloadAction<boolean>) {
            state.isMessageCreated = action.payload;
        },
        switchEditingMessageStatus(state, action: PayloadAction<{ payloadID: string, status: boolean }>) {
            const { payloadID, status } = action.payload;
            // /. payload

            const otherMessages = state.messages.filter(message => !message.isEditable);
            const sendedMesages = state.messages.filter(message => message.isEditable);
            const updatedMessagesArray = sendedMesages.map(message => message.id === payloadID ? { ...message, isEditing: status } : { ...message, isEditing: false });

            state.messages = [...otherMessages, ...updatedMessagesArray];
        },
        setNewMessageValue(state, action: PayloadAction<{ payloadID: string, value: string }>) {
            const { payloadID, value } = action.payload;
            // /. payload

            const message = state.messages.find(message => message.id === payloadID);
            if (message) {
                message.message = value;
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
                (state, action: PayloadAction<Ifriend[]>) => {
                    const newUsersArray = action.payload.map((item: any) => {
                        return {
                            id: item.steamid,
                            name: item.personaname,
                            avatar: item.avatarmedium,
                            avatarFull: item.avatarfull,
                            status: item.steamid.slice(-1) > 4 ? true : false,
                            gameActivity: state.gameActivity[getRandomGameArrayItem(state.gameActivity)]
                        };
                    });
                    state.friends = newUsersArray;

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
                (state, action: PayloadAction<Imessage[]>) => {
                    const commentsArray = action.payload.map((item: any) => item.body);
                    const newMessagesArray = state.friends.map(((item: any) => {
                        return {
                            id: item.id,
                            name: item.name,
                            avatar: item.avatar,
                            message: commentsArray[getRandomGameArrayItem(commentsArray)],
                            dateOfCreate: generateRandomDate().toUpperCase(),
                            isEditable: false
                        };
                    }));
                    state.messages = newMessagesArray;

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

export const { getCurrentUser, createNewMessage, deleteSpecificMessage, switchMessageCreatedStatus, switchEditingMessageStatus, setNewMessageValue, switchDataLoadingStatus } = profileSlice.actions;

export default profileSlice.reducer;