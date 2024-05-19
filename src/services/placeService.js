import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realTimeDataBase"

export const placeAPI = createApi({
    reducerPath: "placeAPI",
    tagTypes: ['favouritePlaceIdsGet'], 
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`,
        }),
        getPlacesByCategory: builder.query({
            query: (category) =>
                `places.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed;
            },
        }),
        getPlaceById: builder.query({
            query: (id) => `places.json?orderBy="id"&equalTo=${id}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                if (responseTransformed.length) {
                    return responseTransformed[0]
                }
                return null
            }
        }),
        getAllPlaces: builder.query({
            query: () => `places.json`,
        }),

        // Favourites Places
        getFavouritePlaceIds: builder.query({
            query: (localId) => `favourites/${localId}.json`,
            transformResponse: (response) => {
                return response ? Object.values(response) : [];
            },
            providesTags: ['favouritePlaceIdsGet']
        }),
        postFavouritePlaceIds: builder.mutation({
            query: ({favouritePlaceIds, localId}) => ({
                url: `favourites/${localId}.json`,
                method: "PUT",
                body: {
                    favouritePlaceIds: favouritePlaceIds
                },
            }),
            // Invalidates will trigger a refetch on favouritePlaceIdsGet, so will execute getProfileImage and update the state
            invalidatesTags: ['favouritePlaceIdsGet'] 
        }),
    }),
})

export const {
    // Places By category
    useGetCategoriesQuery,
    useGetPlacesByCategoryQuery,
    useGetAllPlacesQuery,
    // Places by id
    useGetPlaceByIdQuery,
    // Favourites Places
    useGetFavouritePlaceIdsQuery,
    usePostFavouritePlaceIdsMutation,
} = placeAPI
