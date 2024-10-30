import * as React from "react";
import { Box, LinearProgress, linearProgressClasses, styled } from "@mui/material";

const CustomLinearProgress = styled(LinearProgress)({
    height: 20,
    borderRadius: 5,
    borderWidth: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        borderRadius: 5,
        backgroundColor: "white",
        border: "3px solid white"
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: "palette.primary.main",
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
        <Box sx={{ width: "100%", border: "1px solid rgba(190, 190, 190)", borderRadius: 1 }}>
            <CustomLinearProgress variant="determinate" value={props.value} />
        </Box>
    );
}