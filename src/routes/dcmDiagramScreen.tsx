import * as React from "react";
import { ActionButton } from "../components/widgets";
import { GroupBox } from "../components/widgets";
import Led from "../components/Led/led";
import { TextEntry } from "../components/widgets";
import { TextRead } from "../components/widgets";
import { Box } from "@mui/material";
import { Label } from "../components/widgets";

export default function DCMDiagramScreen() {
    return (
        <Box sx={{ position: "absolute", left: 0, top: 0, width: 1000, height: 520 }}>
            <GroupBox x={263} y={0} w={205} h={120} value={"1st Crystal Roll"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextRead x={25} y={35} w={120} h={20} value="12.969"></TextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={537} y={0} w={205} h={120} value={"Perpendicular Translation"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextRead x={25} y={35} w={120} h={20} value="12.969"></TextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={797} y={0} w={205} h={120} value={"2nd Crystal Roll"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextRead x={25} y={35} w={120} h={20} value="12.969"></TextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={797} y={183} w={205} h={120} value={"2nd Crystal Fine Roll"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextRead x={25} y={35} w={120} h={20} value="12.969"></TextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={797} y={390} w={205} h={120} value={"2nd Crystal Fine Patch"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextRead x={25} y={35} w={120} h={20} value="12.969"></TextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={537} y={390} w={205} h={120} value={"2nd Crystal Pitch"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextRead x={25} y={35} w={120} h={20} value="12.969"></TextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={263} y={390} w={205} h={120} value={"Bragg Angle"}>
                <ActionButton x={0} y={10} w={30} h={20} value="-" openScreen={false}></ActionButton>
                <TextEntry x={35} y={10} w={100} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={140} y={10} w={30} h={20} value="+" openScreen={false}></ActionButton>
                <Led x={0} y={35} w={20} h={20} value={0}></Led>
                <TextRead x={25} y={35} w={120} h={20} value="12.969"></TextRead>
                <Led x={150} y={35} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={60} w={40} h={20} value="More" openScreen={true}></ActionButton>
                <TextEntry x={45} y={60} w={80} h={20} value={"0.100"} disabled={false}></TextEntry>
                <ActionButton x={130} y={60} w={40} h={20} value="STOP" openScreen={false}></ActionButton>
            </GroupBox>
            <GroupBox x={0} y={183} w={240} h={180} value={"Lateral Mode Selection"}>
                <TextRead x={0} y={0} w={200} h={20} value="Beam Operation Mode"></TextRead>
                <Label x={0} y={25} w={175} h={20} value="Maintenance Mode"></Label>
                <Led x={180} y={26} w={20} h={20} value={0}></Led>
                <Label x={0} y={50} w={175} h={20} value="Maintenance Mode Switch"></Label>
                <Led x={180} y={51} w={20} h={20} value={0}></Led>
                <Label x={0} y={75} w={175} h={20} value="Maint. Mode Lower Limit"></Label>
                <Led x={180} y={76} w={20} h={20} value={0}></Led>
                <Label x={0} y={100} w={175} h={20} value="Beam Op. Lower Limit"></Label>
                <Led x={180} y={100} w={20} h={20} value={1}></Led>
                <ActionButton x={0} y={125} w={200} h={20} value="Beam Operation" openScreen={true}></ActionButton>
            </GroupBox>
        </Box >
    )
}