import * as React from "react";
import { Box, styled } from "@mui/material";
import { BaseProps } from "../../utils/baseProps";

const CustomBox = styled(Box)({
    position: "absolute",
    borderRadius: "50%",
    border: "2px solid rgba(76, 100, 171)"
});


type LedComponentProps = {
    value: number,
}

type LedProps = BaseProps & LedComponentProps;

export default function Led(props: LedProps) {
    const groupShift = props.inGroup ? 8 : 0;
    const bgColor = props.value === 1 ? "rgba(128, 255, 255)" : "rgba(29, 41, 69)"
    return (
        <CustomBox sx={{ left: props.x + groupShift, top: props.y, width: props.w - 2, height: props.h - 2, backgroundColor: bgColor }}>
        </CustomBox>
    )
}