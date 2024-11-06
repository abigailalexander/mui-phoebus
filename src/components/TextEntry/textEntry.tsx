import * as React from "react";
import { OutlinedInput, styled, TextField, } from "@mui/material";
import { BaseProps } from "../../utils/baseProps";

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

type TextEntryComponentProps = {
    value: string | number,
    disabled?: boolean,
}

export type TextEntryProps = BaseProps & TextEntryComponentProps;

export default function PhoebusTextEntry(props: TextEntryProps) {
    const groupShift = props.inGroup ? 8 : 0;
    return (
        <CustomTextField disabled={props.disabled} sx={{ left: props.x + groupShift, top: props.y, width: props.w, height: props.h }} defaultValue={props.value} variant="filled"></CustomTextField>
    )
}

export function MuiTextEntry(props: TextEntryProps) {
    const groupShift = props.inGroup ? 8 : 0;
    return (
        <OutlinedInput disabled={props.disabled} sx={{ textAlign: "center", position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h, fontSize: 12, fontFamily: "monospace" }} defaultValue={props.value} ></OutlinedInput>
    )
}