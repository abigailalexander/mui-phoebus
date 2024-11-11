import * as React from 'react';
import { createTheme } from '@mui/material/styles';

const palette = import.meta.env.VITE_MUI_LIGHT_MODE === "true" ? {
    primary: {
        main: "rgba(29, 41, 69)",
        light: "rgba(128, 255, 255)",
        dark: "rgba(76, 100, 171)",
        contrastText: "rgba(255, 255, 255)"
    },
} : {
    primary: {
        main: "#90caf9",
        light: "rgba(128, 255, 255)",
        dark: "#42a5f5",
        contrastText: "rgba(29, 41, 69)"
    },
}

export const muiTheme = createTheme({
    palette: {
        mode: import.meta.env.VITE_MUI_LIGHT_MODE === "true" ? "light" : "dark",
        ...palette
    }
});

export const diamondTheme = createTheme({
    palette: {
        // Diamond blue with white text
        primary: {
            main: "rgba(29, 41, 69)",
            contrastText: "rgba(255, 255, 255)"
        },
        // Lighter blue
        secondary: {
            main: "rgba(37, 150, 190)"
        },
    }
});