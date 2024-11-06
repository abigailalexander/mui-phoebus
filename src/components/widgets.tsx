import * as React from "react";
import PhoebusLabel, { LabelProps, MuiLabel } from "./Label/label";
import PhoebusActionButton, { ActionButtonProps, MuiActionButton } from "./ActionButton/actionButton";
import PhoebusChoiceButton, { ChoiceButtonProps, MuiChoiceButton } from "./ChoiceButton/choiceButton";
import PhoebusDropDown, { DropDownProps, MuiDropDown } from "./DropDown/dropDown";
import PhoebusProgressBar, { ProgressBarProps, MuiProgressBar } from "./ProgressBar/progressBar";
import PhoebusTextEntry, { TextEntryProps, MuiTextEntry } from "./TextEntry/textEntry";
import PhoebusTextRead, { TextReadProps, MuiTextRead } from "./TextRead/textRead";

export function Label(props: LabelProps) {
    console.log(import.meta.env.VITE_COMPONENT_STYLE)
    console.log(import.meta.env.VITE_TEST)
    if (import.meta.env.VITE_COMPONENT_STYLE === "mui") {
        return <MuiLabel {...props} />
    }
    return <PhoebusLabel {...props} />
}

export function ActionButton(props: ActionButtonProps) {
    if (import.meta.env.VITE_COMPONENT_STYLE === "mui") {
        return <MuiActionButton {...props} />
    }
    return <PhoebusActionButton {...props} />
}

export function ChoiceButton(props: ChoiceButtonProps) {
    if (import.meta.env.VITE_COMPONENT_STYLE === "mui") {
        return <MuiChoiceButton {...props} />
    }
    return <PhoebusChoiceButton {...props} />
}

export function DropDown(props: DropDownProps) {
    if (import.meta.env.VITE_COMPONENT_STYLE === "mui") {
        return <MuiDropDown {...props} />
    }
    return <PhoebusDropDown {...props} />
}

export function ProgressBar(props: ProgressBarProps) {
    if (import.meta.env.VITE_COMPONENT_STYLE === "mui") {
        return <MuiProgressBar {...props} />
    }
    return <PhoebusProgressBar {...props} />
}

export function TextEntry(props: TextEntryProps) {
    if (import.meta.env.VITE_COMPONENT_STYLE === "mui") {
        return <MuiTextEntry {...props} />
    }
    return <PhoebusTextEntry {...props} />
}

export function TextRead(props: TextReadProps) {
    if (import.meta.env.VITE_COMPONENT_STYLE === "mui") {
        return <MuiTextRead {...props} />
    }
    return <PhoebusTextRead {...props} />
}