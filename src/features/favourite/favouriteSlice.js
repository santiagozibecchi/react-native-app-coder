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
            const favouriteIdIndex = state.value.favouritePlaceIds.findIndex((favId) => favId === payload.placeId);
            const isFavIdSaved = favouriteIdIndex === -1;

            if (payload.placeId !== undefined && payload.placeId !== null) {
                if (isFavIdSaved) {
                    state.value.favouritePlaceIds.push(payload.placeId);
                } else {
                    state.value.favouritePlaceIds.splice(favouriteIdIndex, 1);
                }
            }
        },
        setFavouritePlaces: (state, { payload }) => {
            state.value.favouritePlaceIds = payload;
        }
    }
})

export const { updateFavouritePlace, setFavouritePlaces } = favouriteSlice.actions;

export default favouriteSlice.reducer;