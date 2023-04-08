import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        channels: [
            {
                id: 1,
                name: '# NikitosXClub',
                link: 'NikitosXClub'
            },
            {
                id: 2,
                name: '# LocalElysium',
                link: 'LocalElysium'
            },
            {
                id: 3,
                name: '# general 3',
                link: 'test1'
            },
            {
                id: 4,
                name: '# general 4',
                link: 'test2'
            },
            {
                id: 5,
                name: '# general 5',
                link: 'test3'
            },
            {
                id: 6,
                name: '# general 6',
                link: 'test4'
            },
            {
                id: 7,
                name: '# general 7',
                link: 'test5'
            },
            {
                id: 8,
                name: '# general 8',
                link: 'test6'
            },
            {
                id: 9,
                name: '# general 9',
                link: 'test7'
            },
            {
                id: 10,
                name: '# general 10',
                link: 'test8'
            },
            {
                id: 11,
                name: '# general 11',
                link: 'test9'
            },
            {
                id: 12,
                name: '# general 12',
                link: 'test10'
            }
        ],
        isFirstPageLoading: true
    },
    reducers: {
        switchFirstPageLoadingStatus(state, actions) {
            state.isFirstPageLoading = actions.isFirstPageLoading;
        }
    }
});

export const { switchFirstPageLoadingStatus } = mainSlice.actions;

export default mainSlice.reducer;
