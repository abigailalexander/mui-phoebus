import * as React from "react";
import { Button, styled } from "@mui/material";
import { diamondTheme } from "../../theme";
import { BaseProps } from "../../utils/baseProps";

type ActionButtonComponentProps = {
    value: string,
    openScreen: boolean,
    fontSize?: number
}

export type ActionButtonProps = BaseProps & ActionButtonComponentProps;

const CustomButton = styled(Button)({
    position: "absolute",
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
    overflow: "hidden",
    "&:hover": {
        opacity: 0.9,
        borderColor: "rgba(170, 170, 170)",
    },
    "&:focus": {
        borderColor: diamondTheme.palette.secondary.main,
        borderWidth: "2px"
    }
})

export default function PhoebusActionButton(props: ActionButtonProps) {
    const groupShift = props.inGroup ? 8 : 0;
    let textColor = "primary.main";
    let bgColor = "primary.contrastText";
    let borderColor = "rgba(200, 200, 200)"
    if (props.openScreen) {
        textColor = "primary.contrastText";
        bgColor = "primary.main";
        borderColor = "primary.main";
    }
    return (
        <CustomButton variant="outlined" sx={{ left: props.x + groupShift, top: props.y, width: props.w, height: props.h, color: textColor, backgroundColor: bgColor, fontSize: props.fontSize || 12, borderColor: borderColor }}>{props.value}</CustomButton>
    )
}

export function MuiActionButton(props: ActionButtonProps) {
    const groupShift = props.inGroup ? 8 : 0;
    let textColor = "primary.main";
    let bgColor = "primary.contrastText";
    let borderColor = "rgba(200, 200, 200)"
    if (props.openScreen) {
        textColor = "primary.contrastText";
        bgColor = "primary.main";
        borderColor = "primary.main";
        return (
            <Button variant="contained" sx={{ padding: "5px 14px", minWidth: 0, maxWidth: props.w - 2, maxHeight: props.h, textTransform: "none", fontSize: props.fontSize || 12, whiteSpace: "nowrap", position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h }}>{props.value}</Button>
        )
    }
    return (
        <Button variant="outlined" sx={{ padding: "5px 14px", minWidth: 0, maxWidth: props.w - 2, maxHeight: props.h, textTransform: "none", whiteSpace: "nowrap", position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h, fontSize: props.fontSize || 12 }}>{props.value}</Button>
    )
}