import * as React from "react";
import { styled, TextField, } from "@mui/material";

const CustomTextField = styled(TextField)({
    position: "absolute",
    "& .MuiInputBase-input.Mui-disabled": {
        WebkitTextFillColor: "rgba(29, 41, 69, 1)",
        fontFamily: "monospace",
        textAlign: "center",
        verticalAlign: "center",
        backgroundColor: "rgba(240, 240, 240, 255)",
    },
    "& .MuiInputBase-input.MuiOutlinedInput-input": {
        padding: "0px",
        fontFamily: "monospace",
        fontSize: 12
    },
    "& .MuiInputBase-root.Mui-disabled": {
        "& > fieldset": {
            borderColor: "rgba(240, 240, 240, 255)",
        }
    }
})

type TextReadProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string | number
}

export default function TextRead(props: TextReadProps) {
    return (
        <CustomTextField sx={{ left: props.x, top: props.y, width: props.w, height: props.h }} value={props.value} variant="outlined" disabled={true}></CustomTextField>
    )
}