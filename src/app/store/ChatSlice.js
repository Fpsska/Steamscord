import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        channels: [
            {
                id: 1,
                text: "# NikitosXClub",
                link: "/Steamscord",
                isSelected: false
            },
            {
                id: 2,
                text: "# LocatElysium",
                link: "/Steamscord/LocatElysium",
                isSelected: false
            },
            {
                id: 3,
                text: "# general 3",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 4,
                text: "# general 4",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 5,
                text: "# general 5",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 6,
                text: "# general 6",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 7,
                text: "# general 7",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 8,
                text: "# general 8",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 9,
                text: "# general 9",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 10,
                text: "# general 10",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 11,
                text: "# general 11",
                link: "/Steamscord/test",
                isSelected: false
            },
            {
                id: 12,
                text: "# general 12",
                link: "/Steamscord/test",
                isSelected: false
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
    },
    reducers: {
        switchSettingsStatus(state, action) {
            state.settingsIsOpen = action.payload
        },
        switchFetchingStatus(state, action) {
            state.isFetching = action.payload
        },
        // switchSelectedStatus(state, action) {
        //     // state.channels.map(item => {
        //     //     return {
        //     //         ...item,
        //     //         isSelected: action.payload
        //     //     }
        //     // })
        //     ///////
        //     // return [...state.channels.map(item => {
        //     //     return {
        //     //         ...item,
        //     //         isSelected: action.payload
        //     //     }
        //     // })]
        // }
    }
})

export const { switchSettingsStatus, switchFetchingStatus } = chatSlice.actions;

export default chatSlice.reducer;