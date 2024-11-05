import * as React from "react";
import { Box } from "@mui/material";

type GroupBoxProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string,
    children: any
}

export default function GroupBox(props: GroupBoxProps) {
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