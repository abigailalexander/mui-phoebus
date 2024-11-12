import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material';
import { diamondTheme } from '../../theme';
import { BaseProps } from '../../utils/baseProps';


type ChoiceButtonComponentProps = {
    value: string[],
}

export type ChoiceButtonProps = BaseProps & ChoiceButtonComponentProps;

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

export default function PhoebusChoiceButton(props: ChoiceButtonProps) {
    const groupShift = props.inGroup ? 8 : 0;
    const [alignment, setAlignment] = React.useState(props.value[0]);
    return (
        <ToggleButtonGroup
            sx={{ position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h }}
            color="primary"
            value={alignment}
            exclusive
            onChange={(e, newAlignment) => { setAlignment(newAlignment) }}
            aria-label="test"
        >
            {props.value.map((item) => {
                return (<CustomToggleButton sx={{ height: props.h, width: props.w / 2, padding: 0 }} value={item} key={item}>{item}</CustomToggleButton>)
            })}
        </ToggleButtonGroup>
    );
}

export function MuiChoiceButton(props: ChoiceButtonProps) {
    const groupShift = props.inGroup ? 8 : 0;
    const [alignment, setAlignment] = React.useState(props.value[0]);
    // TO DO
    /**
     * add shadow to focus blue border
     * add shadow to button itself
     */
    return (
        <ToggleButtonGroup
            sx={{ position: "absolute", left: props.x + groupShift, top: props.y, width: props.w, height: props.h }}
            color="primary"
            value={alignment}
            exclusive
            onChange={(e, newAlignment) => { setAlignment(newAlignment) }}
            aria-label="test"
        >
            {props.value.map((item, idx) => {
                return (<ToggleButton sx={{ height: props.h, width: props.w / 2, textTransform: "none", fontSize: 14, padding: 0 }} value={item} key={item}>{item}</ToggleButton>)
            })}
        </ToggleButtonGroup>
    );
}