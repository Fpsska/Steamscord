import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const steamAPI = createApi({
    reducerPath: 'steamAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://steamscord-backend.vercel.app/api/data' }),
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: () => '/'
        })
    })
});

const { useGetProfileInfoQuery } = steamAPI;

export default useGetProfileInfoQuery;