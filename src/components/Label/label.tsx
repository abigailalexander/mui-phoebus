import * as React from "react";
import { styled, Typography } from "@mui/material";
import { diamondTheme } from "../../theme";

type LabelProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string
}

const CustomTypography = styled(Typography)({
    position: "absolute",
    fontFamily: "Arial",
    fontSize: 14,
    color: diamondTheme.palette.primary.main,
    textAlign: "right",
    verticalAlign: "center",
    overflow: "hidden"
})


export default function Label(props: LabelProps) {
    return (
        <CustomTypography sx={{ left: props.x, top: props.y, height: props.h, width: props.w }}>{props.value}</CustomTypography>
    )
}