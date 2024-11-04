import * as React from "react";
import { styled, TextField, } from "@mui/material";

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

type TextReadProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string | number
}

export default function TextRead(props: TextReadProps) {
    return (
        <CustomTextField sx={{ "& .MuiInputBase-input.MuiOutlinedInput-input": { height: props.h }, left: props.x, top: props.y, width: props.w, height: props.h }} value={props.value} variant="outlined" disabled={true}></CustomTextField>
    )
}