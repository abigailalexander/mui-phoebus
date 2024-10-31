import * as React from "react";
import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { diamondTheme } from "../../theme";

const CustomSelect = styled(Select)({
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

type DropDownProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string[]
}

export default function DropDown(props: DropDownProps) {
    let firstValue = props.value[0] || "";
    const [value, setValue] = React.useState(firstValue);

    return (
        <FormControl sx={{ m: 1, width: props.w, height: props.h, padding: 0 }}>
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