import * as React from "react";
import { MuiActionButton } from "../components/ActionButton/actionButton";
import GroupBox from "../components/GroupBox/GroupBox";
import Led from "../components/Led/led";
import { MuiTextEntry } from "../components/TextEntry/textEntry";
import { MuiTextRead } from "../components/TextRead/textRead";
import { Box } from "@mui/material";
import { MuiLabel } from "../components/Label/label";

export default function MuiDCMDiagramScreen() {
    return (
        <Box sx={{ position: "absolute", left: 0, top: 0, width: 1000, height: 520 }}>
            <GroupBox x={263} y={0} w={205} h={120} value={"1st Crystal Roll"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextRead x={25} y={35} w={120} h={20} value="12.969"></MuiTextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={537} y={0} w={205} h={120} value={"Perpendicular Translation"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextRead x={25} y={35} w={120} h={20} value="12.969"></MuiTextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={797} y={0} w={205} h={120} value={"2nd Crystal Roll"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextRead x={25} y={35} w={120} h={20} value="12.969"></MuiTextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={797} y={183} w={205} h={120} value={"2nd Crystal Fine Roll"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextRead x={25} y={35} w={120} h={20} value="12.969"></MuiTextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={797} y={390} w={205} h={120} value={"2nd Crystal Fine Patch"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextRead x={25} y={35} w={120} h={20} value="12.969"></MuiTextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={537} y={390} w={205} h={120} value={"2nd Crystal Pitch"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextRead x={25} y={35} w={120} h={20} value="12.969"></MuiTextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={263} y={390} w={205} h={120} value={"Bragg Angle"}>
                <MuiActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></MuiActionButton>
                <MuiTextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></MuiActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <MuiTextRead x={25} y={35} w={120} h={20} value="12.969"></MuiTextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></MuiActionButton>
                <MuiTextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></MuiTextEntry>
                <MuiActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></MuiActionButton>
            </GroupBox>
            <GroupBox x={0} y={183} w={240} h={180} value={"Lateral Mode Selection"}>
                <MuiTextRead x={0} y={0} w={200} h={20} value="Beam Operation Mode"></MuiTextRead>
                <MuiLabel x={0} y={25} w={175} h={20} value="Maintenance Mode"></MuiLabel>
                <Led x={180} y={26} w={20} h={20} value={0}></Led>
                <MuiLabel x={0} y={50} w={175} h={20} value="Maintenance Mode Switch"></MuiLabel>
                <Led x={180} y={51} w={20} h={20} value={0}></Led>
                <MuiLabel x={0} y={75} w={175} h={20} value="Maint. Mode Lower Limit"></MuiLabel>
                <Led x={180} y={76} w={20} h={20} value={0}></Led>
                <MuiLabel x={0} y={100} w={175} h={20} value="Beam Op. Lower Limit"></MuiLabel>
                <Led x={180} y={100} w={20} h={20} value={1}></Led>
                <MuiActionButton x={0} y={125} w={200} h={20} value="Beam Operation" openScreen={true}></MuiActionButton>
            </GroupBox>
        </Box >
    )
}