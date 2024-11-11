import * as React from "react";
import { ActionButton } from "../components/widgets";
import { GroupBox } from "../components/widgets";
import Led from "../components/Led/led";
import { ProgressBar } from "../components/widgets";
import { TextEntry } from "../components/widgets";
import { TextRead } from "../components/widgets";
import { Box } from "@mui/material";

export default function DCMScreen() {
    return (
        <Box sx={{ position: "absolute", left: 0, top: 0, width: 1280, height: 430 }}>
            <GroupBox x={0} y={0} w={340} h={90} value={"Embedded"}>
                <ActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
                <ActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></ActionButton>
                <ActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextRead x={130} y={5} w={140} h={20} value="12.969"></TextRead>
                <ActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <TextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <TextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={0} y={90} w={340} h={90} value={"Embedded_1"}>
                <ActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
                <ActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></ActionButton>
                <ActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextRead x={130} y={5} w={140} h={20} value="12.969"></TextRead>
                <ActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <TextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <TextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={0} y={180} w={340} h={90} value={"Embedded_2"}>
                <ActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
                <ActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></ActionButton>
                <ActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextRead x={130} y={5} w={140} h={20} value="12.969"></TextRead>
                <ActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <TextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <TextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={0} y={270} w={340} h={90} value={"Embedded_3"}>
                <ActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
                <ActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></ActionButton>
                <ActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextRead x={130} y={5} w={140} h={20} value="12.969"></TextRead>
                <ActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <TextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <TextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={340} y={0} w={340} h={60} value={"Temperature"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={340} y={60} w={340} h={60} value={"Temperature_1"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={340} y={120} w={340} h={60} value={"Temperature_2"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={340} y={180} w={340} h={60} value={"Temperature_3"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={340} y={240} w={340} h={60} value={"Temperature_4"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={340} y={300} w={340} h={60} value={"Temperature_5"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={680} y={0} w={205} h={120} value={"Embedded"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextRead x={35} y={10} w={100} h={20} value="12.969"></TextRead>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextEntry x={25} y={35} w={120} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={680} y={120} w={205} h={120} value={"Embedded_4"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextRead x={35} y={10} w={100} h={20} value="12.969"></TextRead>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextEntry x={25} y={35} w={120} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={680} y={240} w={205} h={120} value={"Embedded_5"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextRead x={35} y={10} w={100} h={20} value="12.969"></TextRead>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextEntry x={25} y={35} w={120} h={20} value={"0.100"} disabled={false}></TextEntry>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={885} y={0} w={340} h={60} value={"Temperature_6"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={885} y={60} w={340} h={60} value={"Temperature_7"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={885} y={120} w={340} h={60} value={"Temperature_8"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={885} y={180} w={340} h={60} value={"Temperature_9"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={885} y={240} w={340} h={60} value={"Temperature_10"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
            <GroupBox x={885} y={300} w={340} h={60} value={"Temperature_11"}>
                <ActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></ActionButton>
                <TextRead x={50} y={5} w={130} h={20} value="12.969"></TextRead>
                <ProgressBar x={180} y={5} w={125} h={20} value={50}></ProgressBar>
            </GroupBox>
        </Box>
    )
}