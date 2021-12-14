import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const steamAPI = createApi({
    reducerPath: "steamAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: () => "/api"
        })
    })
})

const { useGetProfileInfoQuery } = steamAPI;

export default useGetProfileInfoQuery