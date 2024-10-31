import * as React from "react";
import { Box, styled } from "@mui/material";

const CustomBox = styled(Box)({
    borderRadius: "50%",
    border: "2px solid rgba(107, 107, 107)"
});

type LedProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: number,
}

export default function Led(props: LedProps) {
    const bgColor = props.value === 1 ? "rgba(60, 255, 60)" : "rgba(237, 237, 237)"
    return (
        <CustomBox sx={{ width: props.w - 2, height: props.h - 2, backgroundColor: bgColor }}>
        </CustomBox>
    )
}