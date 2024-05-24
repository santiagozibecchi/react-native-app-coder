import { createSlice } from '@reduxjs/toolkit';

// Con esto podemos customizar las peticiones que especificamos en los matchers
import { placeAPI } from '../../services/placeService';

const favouriteCategoriesSlice = createSlice({
    name: 'favouriteCategories',
    initialState: {
        value: {
            categories: [],
            isLoading: false,
            error: null,
        }
    },
    reducers: {
        setCategories: (state, { payload }) => {
            state.value.categories = Array.isArray(payload) ? payload : [];
        },
        addCategory: (state, { payload }) => {
            if (state.value.categories.length < 3 && !state.value.categories.includes(payload)) {
                state.value.categories.push(payload);
            }
        },
        removeCategory: (state, { payload }) => {
            state.value.categories = state.value.categories.filter(category => category !== payload);
        },
        clearCategories: (state) => {
            state.value.categories = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(placeAPI.endpoints.getFavouriteCategories.matchPending, (state) => {
                state.value.isLoading = true;
                state.value.error = null;
            })
            .addMatcher(placeAPI.endpoints.getFavouriteCategories.matchFulfilled, (state, { payload }) => {
                state.value.isLoading = false;
                // Si la petición se realizó con éxito pero el payload por alguna razón no trae ningún valor
                // siempre devolver un tipo de dato válido, para este caso un arreglo vacío,
                // podemos evitar errores como un nuevo usuario donde favouriteCategories es 
                // undefined porque nunca ha guardado una categoría favorita
                state.value.categories = payload || [];
            })
            .addMatcher(placeAPI.endpoints.getFavouriteCategories.matchRejected, (state, { error }) => {
                state.value.isLoading = false;
                state.value.error = error;
            });
    },
});

export const {
    setCategories,
    addCategory,
    removeCategory,
    clearCategories,
} = favouriteCategoriesSlice.actions;

export default favouriteCategoriesSlice.reducer;
