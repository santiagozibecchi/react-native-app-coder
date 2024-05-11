import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "../features/user/userSlice"
import { authApi } from "../services/authService"
import { placeAPI } from "../services/placeService"


const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [placeAPI.reducerPath]: placeAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(placeAPI.middleware)
})

setupListeners(store.dispatch)

export default store
