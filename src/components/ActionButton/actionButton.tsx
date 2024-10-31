import * as React from "react";
import { Button, styled } from "@mui/material";
import { diamondTheme } from "../../theme";

type ActionButtonProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string
    openScreen: boolean
}

const CustomButton = styled(Button)({
    ".MuiButton-root": {
        minWidth: "1px"
    },
    "& MuiButtonBase-root.MuiButton-text": {
        padding: "0px"
    },
    fontFamily: "Arial",
    textTransform: "none",
    padding: "0px 0px",
    minHeight: 0,
    minWidth: 0,
    borderWidth: "1px",
    lineHeight: "unset",
    "&:hover": {
        opacity: 0.9,
        borderColor: "rgba(170, 170, 170)",
    },
    "&:focus": {
        borderColor: diamondTheme.palette.secondary.main,
        borderWidth: "2px"
    }
})

export default function ActionButton(props: ActionButtonProps) {
    let textColor = "primary.main";
    let bgColor = "primary.contrastText";
    let borderColor = "rgba(200, 200, 200)"
    if (props.openScreen) {
        textColor = "primary.contrastText";
        bgColor = "primary.main";
        borderColor = "primary.main";
    }
    return (
        <CustomButton variant="outlined" sx={{ width: props.w, height: props.h, color: textColor, backgroundColor: bgColor, fontSize: (props.openScreen ? 14 : 12), borderColor: borderColor }}>{props.value}</CustomButton>
    )
}