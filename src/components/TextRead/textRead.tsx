import * as React from "react";
import { styled, TextField, Typography, } from "@mui/material";
import { BaseProps } from "../../utils/baseProps";

const CustomTextField = styled(TextField)({
    position: "absolute",
    "& .MuiInputBase-input.Mui-disabled": {
        WebkitTextFillColor: "white",
        textAlign: "center",
        verticalAlign: "center",
        backgroundColor: "rgba(76, 100, 171)",
    },
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
        padding: "0px",
        fontFamily: "monospace",
        fontSize: 12,
    },
    "& .MuiInputBase-root.Mui-disabled": {
        "& > fieldset": {
            borderColor: "rgba(76, 100, 171)",
        }
    }
})


type TextReadComponentProps = {
    value: string | number,
}

export type TextReadProps = BaseProps & TextReadComponentProps;

export default function PhoebusTextRead(props: TextReadProps) {
    const groupShift = props.inGroup ? 8 : 0;
    return (
        <CustomTextField sx={{ "& .MuiInputBase-input.MuiOutlinedInput-input": { height: props.h }, left: props.x + groupShift, top: props.y, width: props.w, height: props.h }} value={props.value} variant="outlined" disabled={true}></CustomTextField>
    )
}

export function MuiTextRead(props: TextReadProps) {
    const groupShift = props.inGroup ? 8 : 0;
    return (
        <Typography sx={{ position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h, fontSize: 12, fontFamily: "monospace" }}>{props.value}</Typography>
    )
}