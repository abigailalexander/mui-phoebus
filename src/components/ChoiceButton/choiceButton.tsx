import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material';
import { diamondTheme } from '../../theme';

type ChoiceButtonProps = {
    x: number,
    y: number,
    w: number,
    h: number,
    value: string[]
}

const CustomToggleButton = styled(ToggleButton)({
    fontFamily: "Arial",
    fontSize: 14,
    color: "black",
    textTransform: "none",
    minHeight: 0,
    minWidth: 0,
    borderWidth: "1px",
    lineHeight: "unset",
    "&.Mui-selected": {
        backgroundColor: "rgba(184, 195, 223)",
        "&:hover": {
            backgroundColor: "rgba(184, 195, 223, 0.6)",
        },
    },
    overflowX: "hidden",
    whiteSpace: "nowrap",
    borderColor: "rgba(170, 170, 170)",
    "&:focus": {
        borderColor: diamondTheme.palette.secondary.main,
    },
    "&:hover": {
        borderColor: "rgba(170, 170, 170)",
    }
})

export default function ChoiceButton(props: ChoiceButtonProps) {
    const [alignment, setAlignment] = React.useState(props.value[0]);
    // TO DO
    /**
     * add shadow to focus blue border
     * add shadow to button itself
     */
    return (
        <ToggleButtonGroup
            sx={{ width: props.w, height: props.h }}
            color="primary"
            value={alignment}
            exclusive
            onChange={(e, newAlignment) => { setAlignment(newAlignment) }}
            aria-label="test"
        >
            {props.value.map((item) => {
                return (<CustomToggleButton sx={{ width: props.w / 2 }} value={item} key={item}>{item}</CustomToggleButton>)
            })}
        </ToggleButtonGroup>
    );
}