import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../databases/realTimeDataBase"

export const placeAPI = createApi({
    reducerPath: "placeAPI", //Establish a unique name for the API
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
    }),
})

export const {
    useGetCategoriesQuery,
    useGetPlacesByCategoryQuery,
    useGetPlaceByIdQuery,
} = placeAPI
