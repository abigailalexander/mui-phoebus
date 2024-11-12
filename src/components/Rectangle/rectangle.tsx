import * as React from "react";
import { Divider } from "@mui/material";
import { BaseProps } from "../../utils/baseProps";


export default function MuiDivider(props: BaseProps) {
    const groupShift = props.inGroup ? 8 : 0;

    return (
        <Divider sx={{ left: props.x + groupShift, top: props.y, width: props.w, position: "absolute", backgroundColor: "rgba(184, 195, 223)" }} />
    )
}