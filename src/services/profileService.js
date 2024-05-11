import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realTimeDataBase"

// DEVNOTES: profileAPI contains "profileImage/" and "locations/" enpoints
export const profileAPI = createApi({
    reducerPath: "profileAPI", // Establish a unique name for the API
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['profileImageGet'], // Declare tags
    endpoints: (builder) => ({
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),
        postProfileImage: builder.mutation({
            query: ({base64Image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: base64Image
                },
            }),
            // Invalidates will trigger a refetch on profileImageGet, so will execute getProfileImage and update the state
            invalidatesTags: ['profileImageGet'] 
        }),
    }),

})

export const {
    useGetProfileImageQuery,
    usePostProfileImageMutation,
} = profileAPI
