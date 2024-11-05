import * as React from "react";
import { MuiActionButton } from "../components/ActionButton/actionButton";
import GroupBox from "../components/GroupBox/GroupBox";
import Led from "../components/Led/led";
import { MuiProgressBar } from "../components/ProgressBar/progressBar";
import { MuiTextEntry } from "../components/TextEntry/textEntry";
import { MuiTextRead } from "../components/TextRead/textRead";
import { Box } from "@mui/material";

export default function MuiDCMScreen() {
    return (
        <Box sx={{ position: "absolute", left: 0, top: 0, width: 1280, height: 430 }}>
            <GroupBox x={0} y={0} w={340} h={90} value={"Embedded"}>
                <MuiActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
                <MuiActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></MuiActionButton>
                <MuiActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextRead x={130} y={5} w={140} h={20} value="12.969"></MuiTextRead>
                <MuiActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <MuiTextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={0} y={90} w={340} h={90} value={"Embedded_1"}>
                <MuiActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
                <MuiActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></MuiActionButton>
                <MuiActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextRead x={130} y={5} w={140} h={20} value="12.969"></MuiTextRead>
                <MuiActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <MuiTextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={0} y={180} w={340} h={90} value={"Embedded_2"}>
                <MuiActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
                <MuiActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></MuiActionButton>
                <MuiActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextRead x={130} y={5} w={140} h={20} value="12.969"></MuiTextRead>
                <MuiActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <MuiTextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={0} y={270} w={340} h={90} value={"Embedded_3"}>
                <MuiActionButton x={50} y={5} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
                <MuiActionButton x={5} y={5} w={40} h={20} value="GEAR" openScreen={true}></MuiActionButton>
                <MuiActionButton x={95} y={5} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextRead x={130} y={5} w={140} h={20} value="12.969"></MuiTextRead>
                <MuiActionButton x={275} y={5} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={5} y={30} w={85} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={100} y={30} w={20} h={20} value={0}></Led>
                <MuiTextEntry x={130} y={30} w={140} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={280} y={30} w={20} h={20} value={1}></Led>
            </GroupBox>
            <GroupBox x={340} y={0} w={340} h={60} value={"Temperature"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={340} y={60} w={340} h={60} value={"Temperature_1"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={340} y={120} w={340} h={60} value={"Temperature_2"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={340} y={180} w={340} h={60} value={"Temperature_3"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={340} y={240} w={340} h={60} value={"Temperature_4"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={340} y={300} w={340} h={60} value={"Temperature_5"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={680} y={0} w={205} h={120} value={"Embedded"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextRead x={35} y={10} w={100} h={20} value="12.969"></MuiTextRead>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextEntry x={25} y={35} w={120} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={680} y={120} w={205} h={120} value={"Embedded_4"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextRead x={35} y={10} w={100} h={20} value="12.969"></MuiTextRead>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextEntry x={25} y={35} w={120} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={680} y={240} w={205} h={120} value={"Embedded_5"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextRead x={35} y={10} w={100} h={20} value="12.969"></MuiTextRead>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextEntry x={25} y={35} w={120} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={885} y={0} w={340} h={60} value={"Temperature_6"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={885} y={60} w={340} h={60} value={"Temperature_7"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={885} y={120} w={340} h={60} value={"Temperature_8"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={885} y={180} w={340} h={60} value={"Temperature_9"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={885} y={240} w={340} h={60} value={"Temperature_10"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
            <GroupBox x={885} y={300} w={340} h={60} value={"Temperature_11"}>
                <MuiActionButton x={5} y={5} w={40} h={20} value="TEMP" openScreen={true}></MuiActionButton>
                <MuiTextRead x={50} y={5} w={130} h={20} value="12.969"></MuiTextRead>
                <MuiProgressBar x={180} y={5} w={125} h={20} value={50}></MuiProgressBar>
            </GroupBox>
        </Box>
    )
}