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
        <div style={{ position: "absolute", width: props.w, height: props.h, left: props.x, top: props.y, }}>
            <Box component="fieldset" sx={{ paddingTop: 0, paddingBottom: 0, paddingRight: 0, paddingLeft: "10px", position: "absolute", width: props.w - 24, height: props.h - 10, border: "1px solid black", backgroundColor: "transparent" }}>
                <legend style={{ fontFamily: "Arial", fontSize: 15 }}>{props.value}</legend>
                {props.children}
            </Box>
        </div>
    )
}