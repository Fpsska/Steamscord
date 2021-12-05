import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "chatPage",
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
            {
                id: 1,
                name: "TheHello",
                image: "profile-1.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 2,
                name: "Nikitos aka. Батя ;D",
                image: "profile-9.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 3,
                name: "Gigzer",
                image: "profile-6.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 4,
                name: "Stikkin",
                image: "profile-7.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 5,
                name: "Bzz",
                image: "profile-2.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 6,
                name: "TTV_siLvyFPS",
                image: "profile-5.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 7,
                name: "justplayer",
                image: "profile-3.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 8,
                name: "❟❛❟ronin❟❛❟",
                image: "profile-4.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 9,
                name: "incoRRect™",
                image: "profile-8.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 10,
                name: "namastefellas",
                image: "profile-10.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 11,
                name: "Mas Fuerte",
                image: "profile-11.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 12,
                name: "torontotokyo drift™",
                image: "profile-12.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            }
        ],
        messagesPageSecond: [
            {
                id: 1,
                name: "TheHello",
                image: "profile-1.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
            {
                id: 2,
                name: "Nikitos aka. Батя ;D",
                image: "profile-9.jpg",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, optio quod. Velit, ut. Doloremque necessitatibus aperiam non fuga corporis illum magnam aspernatur recusandae, qui, id suscipit sed, obcaecati saepe error. Velit consequatur unde vero dolorem nobis repellat perferendis alias rerum eum tempora fugit ipsa cumque quas, labore, illum, esse impedit quidem ducimus!",
                time: new Date().toLocaleTimeString()
            },
        ],
        settingsIsOpen: false,
        isFetching: false
    },
    reducers: {
        switchSettingsStatus(state, action) {
            state.settingsIsOpen = action.payload
        },
        switchFetchingStatus(state, action) {
            state.isFetching = action.payload
        }
    }
})

export const { switchSettingsStatus, switchFetchingStatus } = ChatSlice.actions;

export default ChatSlice.reducer;