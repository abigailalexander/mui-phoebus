import * as React from 'react';
import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
    palette: {
        mode: import.meta.env.VITE_MUI_LIGHT_MODE === "light" ? "light" : "dark",
        ...(import.meta.env.VITE_MUI_LIGHT_MODE === "light" ? {
            primary: {
                main: "rgba(29, 41, 69)",
                light: "rgba(128, 255, 255)",
                dark: "rgba(76, 100, 171)",
                contrastText: "rgba(255, 255, 255)"
            },
        } : {
            primary: {
                main: "#90caf9",
                light: "#e3f2fd",
                dark: "rgba(76, 100, 171)",
                contrastText: "rgba(29, 41, 69)"
            },
        })
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