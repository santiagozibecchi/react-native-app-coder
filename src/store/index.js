import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
// Services
import { authApi } from "../services/authService"
import { placeAPI } from "../services/placeService"
import { profileAPI } from "../services/profileService"
// Reducers
import authReducer from "../features/user/userSlice"
import favouriteReducer from "../features/favourite/favouriteSlice"
import themeReducer from "../features/theme/themeSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        favourite: favouriteReducer,
        theme: themeReducer,
        [authApi.reducerPath]: authApi.reducer,
        [placeAPI.reducerPath]: placeAPI.reducer,
        [profileAPI.reducerPath]: profileAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(placeAPI.middleware)
            .concat(profileAPI.middleware)
})

setupListeners(store.dispatch)

export default store
