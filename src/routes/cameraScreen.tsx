import * as React from "react";
import { ActionButton, DropDown } from "../components/widgets";
import { GroupBox } from "../components/widgets";
import Led from "../components/Led/led";
import { TextEntry } from "../components/widgets";
import { TextRead } from "../components/widgets";
import { Box } from "@mui/material";
import { Label } from "../components/widgets";
import { ChoiceButton } from "../components/widgets";

export default function CameraScreen() {
    return (
        <Box sx={{ position: "absolute", left: 0, top: 0, width: 1280, height: 800 }}>
            <GroupBox x={0} y={38} w={410} h={304} value={"CAMERA"}>
                <Label x={0} y={0} w={135} h={20} value="Acquire"></Label>
                <ChoiceButton x={140} y={0} w={115} h={20} value={["Done", "Acquire"]}></ChoiceButton>
                <Led x={308} y={0} w={20} h={20} value={1}></Led>
                <Label x={0} y={25} w={135} h={20} value="Array Counter"></Label>
                <TextEntry x={140} y={25} w={115} h={20} value={"0.000"} disabled={false}></TextEntry>
                <TextRead x={260} y={25} w={115} h={20} value={"7757.000"}></TextRead>
                <Label x={0} y={50} w={135} h={20} value="Array Callbacks"></Label>
                <ChoiceButton x={140} y={50} w={115} h={20} value={["Disable", "Enable"]}></ChoiceButton>
                <Led x={308} y={50} w={20} h={20} value={1}></Led>
                <Label x={0} y={75} w={135} h={20} value="Acquire Time"></Label>
                <TextEntry x={140} y={75} w={115} h={20} value={"0.000"} disabled={false}></TextEntry>
                <TextRead x={260} y={75} w={115} h={20} value={"7757.000"}></TextRead>
                <Label x={0} y={100} w={135} h={20} value="Acquire Period"></Label>
                <TextEntry x={140} y={100} w={115} h={20} value={"0.000"} disabled={false}></TextEntry>
                <TextRead x={260} y={100} w={115} h={20} value={"7757.000"}></TextRead>
                <Label x={0} y={125} w={135} h={20} value="Num Images Counter"></Label>
                <TextEntry x={140} y={125} w={235} h={20} value={"7757.000"} disabled={false}></TextEntry>
                <Label x={0} y={150} w={135} h={20} value="Num Images"></Label>
                <TextEntry x={140} y={150} w={115} h={20} value={"0.000"} disabled={false}></TextEntry>
                <TextRead x={260} y={150} w={115} h={20} value={"7757.000"}></TextRead>
                <Label x={0} y={175} w={135} h={20} value="Num Exposures"></Label>
                <TextEntry x={140} y={175} w={115} h={20} value={"0.000"} disabled={false}></TextEntry>
                <TextRead x={260} y={175} w={115} h={20} value={"7757.000"}></TextRead>
                <Label x={0} y={200} w={135} h={20} value="Image Mode"></Label>
                <DropDown x={140} y={200} w={115} h={20} value={["Continuous", "Item 1", "Item 2", "Item 3",]}></DropDown>
                <TextRead x={260} y={200} w={115} h={20} value={"Continuous"}></TextRead>
                <Label x={0} y={225} w={135} h={20} value="Detector State"></Label>
                <TextEntry x={140} y={225} w={235} h={20} value={"Waiting"} disabled={false}></TextEntry>
                <Label x={0} y={250} w={135} h={20} value="Status Message"></Label>
                <TextEntry x={140} y={250} w={235} h={20} value={"Acquiring Data"} disabled={false}></TextEntry>
            </GroupBox>
            <GroupBox x={0} y={342} w={410} h={130} value={"Standard Array"}>
                <Label x={0} y={0} w={135} h={20} value="N Dimensions"></Label>
                <TextEntry x={140} y={0} w={115} h={20} value={"0.000"} disabled={false}></TextEntry>
                <TextRead x={260} y={0} w={115} h={20} value={"7757.000"}></TextRead>
                <Label x={0} y={25} w={135} h={20} value="Dimensions"></Label>
                <TextEntry x={140} y={25} w={115} h={20} value={"[]"} disabled={false}></TextEntry>
                <TextRead x={260} y={25} w={115} h={20} value={"1280.00, 800.00"}></TextRead>
                <Label x={0} y={50} w={135} h={20} value="Unique ID"></Label>
                <TextEntry x={140} y={50} w={235} h={20} value={"7756.0000"} disabled={false}></TextEntry>
                <Label x={0} y={75} w={135} h={20} value="Enable Callbacks"></Label>
                <ChoiceButton x={140} y={75} w={115} h={20} value={["Disable", "Enable"]}></ChoiceButton>
                <Led x={308} y={75} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={0} y={472} w={410} h={55} value={"Automated Engineering Screens"}>
                <Label x={0} y={0} w={135} h={20} value="Sim Detector"></Label>
                <ActionButton x={140} y={0} w={235} h={20} value="bl01t-ea-cam-01 ⧉" openScreen={true} fontSize={14}></ActionButton>
            </GroupBox>
            <GroupBox x={0} y={527} w={410} h={55} value={"Other Demo Screens"}>
                <Label x={0} y={0} w={135} h={20} value="Basic Sim"></Label>
                <ActionButton x={140} y={0} w={235} h={20} value="example-test-01 ⧉" openScreen={true} fontSize={14}></ActionButton>
            </GroupBox>
        </Box>
    )
}