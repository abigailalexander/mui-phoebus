import * as React from "react";
import { styled, Typography } from "@mui/material";
import { diamondTheme } from "../../theme";
import { BaseProps } from "../../utils/baseProps";


type LabelComponentProps = {
    value: string,
    fontSize?: number
}

type LabelProps = BaseProps & LabelComponentProps;

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
    const groupShift = props.inGroup ? 8 : 0;
    return (
        <CustomTypography sx={{ left: props.x + groupShift, top: props.y, height: props.h, width: props.w, fontSize: props.fontSize }}>{props.value}</CustomTypography>
    )
}

export function MuiLabel(props: LabelProps) {
    const groupShift = props.inGroup ? 8 : 0;
    return (
        <Typography sx={{ overflow: "hidden", textAlign: "right", position: "absolute", left: props.x + groupShift, top: props.y, height: props.h, width: props.w, fontSize: props.fontSize || 14 }}>{props.value}</Typography>
    )
}