import * as React from "react";
import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { diamondTheme } from "../../theme";
import { BaseProps } from "../../utils/baseProps";

const CustomSelect = styled(Select)({
    position: "absolute",
    borderRadius: 5,
    fontSize: 14,
    fontFamily: "Arial",
    color: "black",
    padding: "0px",
    "&.MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "rgba(190, 190, 190)"
        },
        "&:hover fieldset": {
            borderColor: "rgba(190, 190, 190)"
        },

        "&.Mui-focused fieldset": {
            borderColor: diamondTheme.palette.secondary.main
        }
    },
});

const CustomMenuItem = styled(MenuItem)({
    fontSize: 14,
    fontFamily: "Arial",
    color: "black",
    padding: "0px",
    "&.Mui-selected": {
        backgroundColor: diamondTheme.palette.secondary.main,
        "&:hover": {
            backgroundColor: diamondTheme.palette.secondary.main
        }
    },
    "&:hover": {
        backgroundColor: diamondTheme.palette.secondary.main
    }
})

type DropDownComponentProps = {
    value: string[],
}

export type DropDownProps = BaseProps & DropDownComponentProps;

export default function PhoebusDropDown(props: DropDownProps) {
    const groupShift = props.inGroup ? 8 : 0;
    let firstValue = props.value[0] || "";
    const [value, setValue] = React.useState(firstValue);

    return (
        <FormControl sx={{ position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h }}>
            <CustomSelect
                sx={{ width: props.w, height: props.h }}
                labelId="dropdown"
                id="dropdown"
                value={value}
                label=""
                onChange={(e) => setValue(e.target.value as string)}
            >
                {props.value.map((item) => {
                    return (<CustomMenuItem sx={{ height: 25 }} value={item} key={item}>{item}</CustomMenuItem>)
                })}
            </CustomSelect>
        </FormControl>

    );
}

export function MuiDropDown(props: DropDownProps) {
    const groupShift = props.inGroup ? 8 : 0;
    let firstValue = props.value[0] || "";
    const [value, setValue] = React.useState(firstValue);

    return (
        <FormControl sx={{ position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h }}>
            <Select
                sx={{ width: props.w, height: props.h, fontSize: 14 }}
                labelId="dropdown"
                id="dropdown"
                value={value}
                label=""
                onChange={(e) => setValue(e.target.value as string)}
            >
                {props.value.map((item) => {
                    return (<MenuItem sx={{ height: 25 }} value={item} key={item}>{item}</MenuItem>)
                })}
            </Select>
        </FormControl>

    );
}