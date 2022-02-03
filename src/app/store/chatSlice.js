import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        channels: [
            {
                id: 1,
                name: "# NikitosXClub",
                link: "NikitosXClub",
            },
            {
                id: 2,
                name: "# LocalElysium",
                link: "LocalElysium",
            },
            {
                id: 3,
                name: "# general 3",
                link: "test",
            },
            {
                id: 4,
                name: "# general 4",
                link: "test",
            },
            {
                id: 5,
                name: "# general 5",
                link: "test",
            },
            {
                id: 6,
                name: "# general 6",
                link: "test",
            },
            {
                id: 7,
                name: "# general 7",
                link: "test",
            },
            {
                id: 8,
                name: "# general 8",
                link: "test",
            },
            {
                id: 9,
                name: "# general 9",
                link: "test",
            },
            {
                id: 10,
                name: "# general 10",
                link: "test",
            },
            {
                id: 11,
                name: "# general 11",
                link: "test",
            },
            {
                id: 12,
                name: "# general 12",
                link: "test",
            }
        ],
        gameActivity: [
            "Counter-Strike: Global Offensive",
            "Worlds of Tanks",
            "Batman: The Enemy Within - The Telltale Series",
            "PUBG: BATTLEGROUNDS",
            "New World",
            "Apex Legends",
            "Dota 2",
            "Metro Exodus"
        ],
        settingsIsOpen: false,
        isFetching: true,
        isInputActive: true,
        isHomePage: true
    },
    reducers: {
        switchSettingsStatus(state, action) {
            state.settingsIsOpen = action.payload
        },
        switchFetchingStatus(state, action) {
            state.isFetching = action.payload
        },
        switchInputStatus(state, action) {
            state.isInputActive = action.payload
        },
        switchHomePageStatus(state, action) {
            state.isHomePage = action.payload
        }
    }
})

export const { switchSettingsStatus, switchFetchingStatus, switchInputStatus, switchHomePageStatus } = chatSlice.actions;

export default chatSlice.reducer;