import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realTimeDataBase"

export const placeAPI = createApi({
    reducerPath: "placeAPI", //Establish a unique name for the API
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['profileImageGet'], //Declare tags
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
    }),
})

export const {
    useGetCategoriesQuery,
    useGetPlacesByCategoryQuery,
} = placeAPI
