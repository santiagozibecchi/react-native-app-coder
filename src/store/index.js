import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "../features/user/userSlice"
import { authApi } from "../services/authService"
import { placeAPI } from "../services/placeService"
import { profileAPI } from "../services/profileService"


const store = configureStore({
    reducer: {
        auth: authReducer,
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
