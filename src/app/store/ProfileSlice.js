import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: "prfilePage",
    initialState: {
        channels: [
            {
                id: 1,
                text: "# general1"
            },
            {
                id: 2,
                text: "# general2"
            },
            {
                id: 3,
                text: "# general3"
            },
            {
                id: 4,
                text: "# general4"
            },
            {
                id: 5,
                text: "# general5"
            },
            {
                id: 6,
                text: "# general6"
            },
            {
                id: 7,
                text: "# general7"
            },
            {
                id: 8,
                text: "# general8"
            },
            {
                id: 9,
                text: "# general9"
            },
            {
                id: 10,
                text: "# general10"
            },
            {
                id: 11,
                text: "# general11"
            },
            {
                id: 12,
                text: "# general12"
            }
        ],
        friends: [
            {
                id: 1,
                name: "TheHello",
                image: "https://via.placeholder.com/40x40"
            },
            {
                id: 2,
                name: "Bzz",
                image: "https://via.placeholder.com/40x40"
            },
            {
                id: 3,
                name: "justplayer",
                image: "https://via.placeholder.com/40x40"
            },            {
                id: 4,
                name: "ronin",
                image: "https://via.placeholder.com/40x40"
            },
            {
                id: 5,
                name: "TTV_siLvyFPS",
                image: "https://via.placeholder.com/40x40"
            },            {
                id: 6,
                name: "Gigzer",
                image: "https://via.placeholder.com/40x40"
            },
            {
                id: 7,
                name: "Stikkin",
                image: "https://via.placeholder.com/40x40"
            },
            {
                id: 8,
                name: "incoRRect™",
                image: "https://via.placeholder.com/40x40"
            },
        ]
    },
    reducers: {

    }
})

export const {  } = ProfileSlice.actions;

export default ProfileSlice.reducer;