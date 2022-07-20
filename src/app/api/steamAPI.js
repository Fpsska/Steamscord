import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const steamAPI = createApi({
    reducerPath: 'steamAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://backend-steamscord.herokuapp.com/' }),
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: () => '/'
        })
    })
})

const { useGetProfileInfoQuery } = steamAPI;

export default useGetProfileInfoQuery