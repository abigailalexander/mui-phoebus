import * as React from "react";
import { Box } from "@mui/material";

type GroupBoxProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string,
    children: any
}

export default function GroupBox(props: GroupBoxProps) {
    return (
        <Box component="fieldset" sx={{ width: props.w, height: props.h, border: "1px solid black" }}>
            <legend>{props.value}</legend>
            {props.children}
        </Box>
    )
}