import * as React from "react";
import { Box, LinearProgress, linearProgressClasses, styled } from "@mui/material";
import { diamondTheme } from "../../theme";

const CustomLinearProgress = styled(LinearProgress)({
    position: "absolute",
    height: 20,
    borderRadius: 5,
    borderWidth: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        borderRadius: 5,
        backgroundColor: "white",
        border: "2px solid white"
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "rgba(76, 100, 171)",
    },
});

type ProgressBarProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: number
}

export default function ProgressBar(props: ProgressBarProps) {
    // Could also possibly add a box shadow like you get in phoebus
    // TO DO LATER
    return (
        <Box sx={{ position: "absolute", left: props.x, top: props.y, width: props.w - 2, height: props.h - 2, border: "1px solid rgba(190, 190, 190)", borderRadius: 1, overflow: "visible" }}>
            <CustomLinearProgress sx={{ width: props.w - 6, height: props.h - 6 }} variant="determinate" value={props.value} />
        </Box>
    );
}