import * as React from "react";
import { styled, TextField, } from "@mui/material";

const CustomTextField = styled(TextField)({
    position: "absolute",
    '& .MuiInputBase-input': {
        disableUnderline: true,
        backgroundColor: 'white',
        border: '2px solid rgba(184, 195, 223)',
        //borderColor: 'primary.main',
        padding: "0px",
        '&:focus': {
            border: '2px solid blue',
        },
        fontSize: 12,
        fontFamily: "Monospace",
        textAlign: "center"
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
    value: string | number,
    disabled?: boolean
}

export default function TextEntry(props: TextEntryProps) {
    return (
        <CustomTextField disabled={props.disabled} sx={{ left: props.x, top: props.y, width: props.w, height: props.h }} defaultValue={props.value} variant="filled"></CustomTextField>
    )
}