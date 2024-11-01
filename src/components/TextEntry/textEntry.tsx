import * as React from "react";
import { styled, TextField, } from "@mui/material";

const CustomTextField = styled(TextField)({
    position: "absolute",
    '& .MuiInputBase-input': {
        disableUnderline: true,
        backgroundColor: 'white',
        border: '1px solid rgba(29, 41, 69)',
        //borderColor: 'primary.main',
        padding: "0px",
        '&:focus': {
            border: '1px solid blue',
            backgroundColor: "rgba(255, 240, 0)"
        },
        fontSize: 14
    },
    '& .MuiInput-underline:after': {
        borderBottom: "0px solid transparent"
    }
})

type TextEntryProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string | number
}

export default function TextEntry(props: TextEntryProps) {
    return (
        <CustomTextField sx={{ left: props.x, top: props.y, width: props.w, height: props.h }} defaultValue={props.value} variant="filled"></CustomTextField>
    )
}