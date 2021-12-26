import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const steamAPI = createApi({
    reducerPath: "steamAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://stemscord.herokuapp.com/" }),
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: () => "/api"
        })
    })
})

const { useGetProfileInfoQuery } = steamAPI;

export default useGetProfileInfoQuery