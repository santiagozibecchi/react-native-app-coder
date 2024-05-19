import { createSlice } from "@reduxjs/toolkit";
import { darkColors, lightColors } from "../../constants/colors";


const initialState = {
    value: {
        currentTheme: "light",
        isDark: false,
        colors: lightColors,
    }
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        // payload es "light" || "dark" unicamente
        setTheme: (state, { payload }) => {
            state.value.currentTheme = payload;
            state.value.isDark = payload === "dark";
            // En base a la variable isDark seteo los estilos (darkColors | lightColors) de forma global
            // para usarlo a lo largo de toda la app
            state.value.colors = state.value.isDark ? darkColors : lightColors;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
