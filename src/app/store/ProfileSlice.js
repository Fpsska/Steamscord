import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
    name: "profilePage",
    initialState: {
        channels: [
            {
                id: 1,
                text: "# general 1"
            },
            {
                id: 2,
                text: "# general 2"
            },
            {
                id: 3,
                text: "# general 3"
            },
            {
                id: 4,
                text: "# general 4"
            },
            {
                id: 5,
                text: "# general 5"
            },
            {
                id: 6,
                text: "# general 6"
            },
            {
                id: 7,
                text: "# general 7"
            },
            {
                id: 8,
                text: "# general 8"
            },
            {
                id: 9,
                text: "# general 9"
            },
            {
                id: 10,
                text: "# general 10"
            },
            {
                id: 11,
                text: "# general 11"
            },
            {
                id: 12,
                text: "# general 12"
            }
        ],
        friends: [
            {
                id: 1,
                name: "TheHello",
                image: "profile-1.jpg"
            },
            {
                id: 2,
                name: "Bzz",
                image: "profile-2.jpg"
            },
            {
                id: 3,
                name: "justplayer",
                image: "profile-3.jpg"
            }, {
                id: 4,
                name: "ronin",
                image: "profile-4.jpg"
            },
            {
                id: 5,
                name: "TTV_siLvyFPS",
                image: "profile-5.jpg"
            },
            {
                id: 6,
                name: "Gigzer",
                image: "profile-6.jpg"
            },
            {
                id: 7,
                name: "Stikkin",
                image: "profile-7.jpg"
            },
            {
                id: 8,
                name: "incoRRect™",
                image: "profile-8.jpg"
            },
            {
                id: 9,
                name: "Nikitos aka. Батя ;D",
                image: "profile-9.jpg"
            }
        ],
        messages: [
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
                name: "ronin",
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
            }
        ],
    },
    reducers: {

    }
})

export const { } = ProfileSlice.actions;

export default ProfileSlice.reducer;