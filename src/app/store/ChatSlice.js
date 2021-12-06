import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
    "chat/fetchComments", // action type
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=12")
            // const response = await fetch("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=9AA8D6B945980A8F34FD85D02BF87DDE&steamids=76561198263478170_76561198034948682_76561198084746227_76561197988532919_76561198291514144_76561198873628029_76561198857004420_76561198155088017", {
            // mode: "no-cors"
            // })
            if (!response.ok) {
                throw new Error("Something wrong!")
            }

            const responseData = await response.json()
            console.log(responseData);
            const actualData = []

            responseData.forEach(item => {
                actualData.push(
                    {
                        id: item.id,
                        name: item.name,
                        image: null,
                        text: item.body,
                        time: new Date().toLocaleTimeString(),
                    }
                )
            })

            return actualData

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        channels: [
            {
                id: 1,
                text: "# NikitosXClub",
                link: "/Steamscord"
            },
            {
                id: 2,
                text: "# LocatElysium",
                link: "/Steamscord/LocatElysium"
            },
            {
                id: 3,
                text: "# general 3",
                link: "/Steamscord/test"
            },
            {
                id: 4,
                text: "# general 4",
                link: "/Steamscord/test"
            },
            {
                id: 5,
                text: "# general 5",
                link: "/Steamscord/test"
            },
            {
                id: 6,
                text: "# general 6",
                link: "/Steamscord/test"
            },
            {
                id: 7,
                text: "# general 7",
                link: "/Steamscord/test"
            },
            {
                id: 8,
                text: "# general 8",
                link: "/Steamscord/test"
            },
            {
                id: 9,
                text: "# general 9",
                link: "/Steamscord/test"
            },
            {
                id: 10,
                text: "# general 10",
                link: "/Steamscord/test"
            },
            {
                id: 11,
                text: "# general 11",
                link: "/Steamscord/test"
            },
            {
                id: 12,
                text: "# general 12",
                link: "/Steamscord/test"
            }
        ],
        friends: [
            {
                id: 1,
                name: "TheHello",
                image: "profile-1.jpg",
                status: "Counter-Strike: Global Offensive",
                isOnline: true
            },
            {
                id: 2,
                name: "Bzz",
                image: "profile-2.jpg",
                status: "Metro Exodus",
                isOnline: true
            },
            {
                id: 3,
                name: "justplayer",
                image: "profile-3.jpg",
                status: "",
                isOnline: false
            }, {
                id: 4,
                name: "❟❛❟ronin❟❛❟",
                image: "profile-4.jpg",
                status: "Dota 2",
                isOnline: true
            },
            {
                id: 5,
                name: "TTV_siLvyFPS",
                image: "profile-5.jpg",
                status: "Apex Legends",
                isOnline: true
            },
            {
                id: 6,
                name: "Gigzer",
                image: "profile-6.jpg",
                status: "New World",
                isOnline: true
            },
            {
                id: 7,
                name: "Stikkin",
                image: "profile-7.jpg",
                status: "PUBG: BATTLEGROUNDS",
                isOnline: true
            },
            {
                id: 8,
                name: "incoRRect™",
                image: "profile-8.jpg",
                status: "Counter-Strike: Global Offensive",
                isOnline: true
            },
            {
                id: 9,
                name: "Nikitos aka. Батя ;D",
                image: "profile-9.jpg",
                status: "",
                isOnline: false
            },
            {
                id: 10,
                name: "namastefellas",
                image: "profile-10.jpg",
                status: "Batman: The Enemy Within - The Telltale Series",
                isOnline: true
            },
            {
                id: 11,
                name: "Mas Fuerte",
                image: "profile-11.jpg",
                status: "Worlds of Tanks",
                isOnline: true
            },
            {
                id: 12,
                name: "torontotokyo drift™",
                image: "profile-12.jpg",
                status: "Counter-Strike: Global Offensive",
                isOnline: true
            }
        ],
        messagesPageFirst: [
            // {
            //     id: "",
            //     name: "TheHello",
            //     image: "profile-1.jpg",
            //     text: "",
            //     time: new Date().toLocaleTimeString()
            // },
        ],
        settingsIsOpen: false,
        isFetching: false,
        status: null,
        fetchError: null
    },
    reducers: {
        switchSettingsStatus(state, action) {
            state.settingsIsOpen = action.payload
        },
        switchFetchingStatus(state, action) {
            state.isFetching = action.payload
        }
    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.status = "loading"
            state.isFetching = true
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.status = "success"
            state.isFetching = false
            state.messagesPageFirst = action.payload
        },
        [fetchComments.rejected]: (state, action) => {
            state.status = "failed"
            state.fetchError = action.payload
        }
    }
})

export const { switchSettingsStatus, switchFetchingStatus } = ChatSlice.actions;

export default ChatSlice.reducer;