import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        value: {
            favouritePlaceIds: [], 
        }
    },
    reducers: {
        updateFavouritePlace: (state, { payload }) => {
            const favouriteIdIdex = state.value.favouritePlaceIds.findIndex((favId) => favId === payload.placeId);
            const isFavIdSaved = favouriteIdIdex === -1;
            if (isFavIdSaved) {
                state.value.favouritePlaceIds.push(payload.placeId);
            } else {
                state.value.favouritePlaceIds.splice(favouriteIdIdex, 1)
            }
        },
        updateFavouritePlaceIds: (state, { payload }) => {
            state.value.favouritePlaceIds = payload.favouritePlaceIds;
        }
    }
})

export const { updateFavouritePlace, updateFavouritePlaceIds } = favouriteSlice.actions;

export default favouriteSlice.reducer;