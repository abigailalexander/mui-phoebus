import * as React from 'react';
import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
    palette: {
        mode: "light"
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