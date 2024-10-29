import * as React from 'react';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export const diamondTheme = createTheme({
    palette: {
        // Diamond blue with white text
        primary: {
            main: "rgba(29, 41, 69)",
            contrastText: "rgba(255, 255, 255)"
        },
        // grey
        secondary: {
            main: "rgba(240, 240, 240, 255)"
        },
    }
});