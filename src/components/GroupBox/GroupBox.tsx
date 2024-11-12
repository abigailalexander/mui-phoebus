import * as React from "react";
import { Box, Card, CardContent, CardHeader, Typography, useTheme } from "@mui/material";
import { BaseProps } from "../../utils/baseProps";

type GroupBoxComponentProps = {
    value: string,
    children: any
}

export type GroupBoxProps = BaseProps & GroupBoxComponentProps;

export default function PhoebusGroupBox(props: GroupBoxProps) {
    const renderChildren = () => {
        return React.Children.map(props.children, (child) => {
            return React.cloneElement(child, {
                inGroup: true,
            });
        });
    };
    return (
        <div style={{ position: "absolute", width: props.w, height: props.h, left: props.x, top: props.y, }}>
            <Box component="fieldset" sx={{ left: 10, padding: "0px", paddingLeft: "8px", position: "absolute", width: props.w - 20, height: props.h - 10, border: "1px solid", backgroundColor: "transparent" }}>
                <legend style={{ fontFamily: "Arial", fontSize: 14 }}>{props.value}</legend>
                {renderChildren()}
            </Box>
        </div>
    )
}

export function MuiGroupBox(props: GroupBoxProps) {
    const palette = useTheme().palette
    const borderColor = import.meta.env.VITE_MUI_LIGHT_MODE === "true" ? palette.grey[400] : palette.grey[800];
    const renderChildren = () => {
        return React.Children.map(props.children, (child) => {
            return React.cloneElement(child, {
                inGroup: true,
            });
        });
    };
    return (
        <div style={{ position: "absolute", width: props.w, height: props.h, left: props.x, top: props.y, }}>
            <Card sx={{ position: "absolute", width: props.w - 20, height: props.h - 10, left: 10, top: 5, border: `1px solid ${borderColor}` }}>
                <CardHeader title={props.value} sx={{ height: 10, width: props.w - 20, textAlign: "left", position: "absolute", top: 0 }} titleTypographyProps={{ fontSize: 14, noWrap: true, top: 2, position: "absolute" }}>
                    <Typography>Hello</Typography>
                </CardHeader>
                <CardContent sx={{ height: props.h - 10, width: props.w - 20, position: "absolute", top: 20, padding: "0px 0px" }}>
                    {renderChildren()}
                </CardContent>
            </Card>
        </div >
    )
}