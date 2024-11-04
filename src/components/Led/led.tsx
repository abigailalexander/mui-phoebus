import * as React from "react";
import { Box, styled } from "@mui/material";

const CustomBox = styled(Box)({
    position: "absolute",
    borderRadius: "50%",
    border: "2px solid rgba(76, 100, 171)"
});

type LedProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: number,
}

export default function Led(props: LedProps) {
    const bgColor = props.value === 1 ? "rgba(128, 255, 255)" : "rgba(29, 41, 69)"
    return (
        <CustomBox sx={{ left: props.x, top: props.y, width: props.w - 2, height: props.h - 2, backgroundColor: bgColor }}>
        </CustomBox>
    )
}