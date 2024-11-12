import * as React from "react";
import { Divider, useTheme } from "@mui/material";
import { BaseProps } from "../../utils/baseProps";


export default function MuiDivider(props: BaseProps) {
    const palette = useTheme().palette;
    const bgColor = import.meta.env.VITE_MUI_LIGHT_MODE === "true" ? "rgba(184, 195, 223)" : palette.primary.contrastText;
    const groupShift = props.inGroup ? 8 : 0;

    return (
        <Divider sx={{ left: props.x + groupShift, top: props.y, width: props.w, position: "absolute", backgroundColor: bgColor }} />
    )
}