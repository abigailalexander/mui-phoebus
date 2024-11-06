import * as React from "react";
import { ActionButton } from "../components/widgets";
import GroupBox from "../components/GroupBox/GroupBox";
import Led from "../components/Led/led";
import { TextEntry } from "../components/widgets";
import { TextRead } from "../components/widgets";
import { Box } from "@mui/material";
import { Label } from "../components/widgets";
import { DropDown } from "../components/widgets";

export default function LowLevelScreen() {
    return (
        <Box sx={{ position: "absolute", left: 0, top: 0, width: 1200, height: 700 }}>
            <GroupBox x={0} y={25} w={325} h={331} value={"INPUTS"}>
                <Label x={0} y={0} w={65} h={20} value="Label" ></Label>
                <TextEntry x={70} y={0} w={205} h={20} value={"Sequencer"} disabled={false}></TextEntry>
                <Label x={0} y={25} w={65} h={20} value="Enable" ></Label>
                <TextEntry x={70} y={25} w={205} h={20} value={"PCAP.ACTIVE"} disabled={false}></TextEntry>
                <Label x={0} y={50} w={65} h={20} value="Delay" ></Label>
                <TextEntry x={70} y={50} w={205} h={20} value={"0"} disabled={false}></TextEntry>
                <Label x={0} y={75} w={65} h={20} value="Bita" ></Label>
                <TextEntry x={70} y={75} w={205} h={20} value={"TTLIN1.VAL"} disabled={false}></TextEntry>
                <Label x={0} y={100} w={65} h={20} value="Delay" ></Label>
                <TextEntry x={70} y={100} w={205} h={20} value={"0"} disabled={false}></TextEntry>
                <Label x={0} y={125} w={65} h={20} value="Bitb" ></Label>
                <TextEntry x={70} y={125} w={205} h={20} value={"ZERO"} disabled={false}></TextEntry>
                <Label x={0} y={150} w={65} h={20} value="Delay" ></Label>
                <TextEntry x={70} y={150} w={205} h={20} value={"0"} disabled={false}></TextEntry>
                <Label x={0} y={175} w={65} h={20} value="Bitc" ></Label>
                <TextEntry x={70} y={175} w={205} h={20} value={"ZERO"} disabled={false}></TextEntry>
                <Label x={0} y={200} w={65} h={20} value="Delay" ></Label>
                <TextEntry x={70} y={200} w={205} h={20} value={"0"} disabled={false}></TextEntry>
                <Label x={0} y={225} w={65} h={20} value="Posa" ></Label>
                <TextEntry x={70} y={225} w={205} h={20} value={"INENC1.VAL"} disabled={false}></TextEntry>
                <Label x={0} y={250} w={65} h={20} value="Posb" ></Label>
                <TextEntry x={70} y={250} w={205} h={20} value={"ZERO"} disabled={false}></TextEntry>
                <Label x={0} y={275} w={65} h={20} value="Posc" ></Label>
                <TextEntry x={70} y={275} w={205} h={20} value={"ZERO"} disabled={false}></TextEntry>
            </GroupBox>
            <GroupBox x={0} y={361} w={325} h={336} value={"PARAMETERS"}>
                <Label x={0} y={205} w={65} h={20} value="Mode" ></Label>
                <DropDown x={70} y={205} w={205} h={20} value={["VIEW", "EDIT", "SUBMIT", "DISCARD"]}></DropDown>
                <Label x={0} y={230} w={65} h={20} value="Prescale" ></Label>
                <TextEntry x={70} y={230} w={205} h={20} value={"1 ms"} disabled={false}></TextEntry>
                <Label x={0} y={255} w={65} h={20} value="Units" ></Label>
                <DropDown x={70} y={255} w={205} h={20} value={["min", "s", "ms", "us"]}></DropDown>
                <Label x={0} y={280} w={65} h={20} value="Repeats" ></Label>
                <TextEntry x={70} y={280} w={205} h={20} value={"500"} disabled={false}></TextEntry>
            </GroupBox>
            <GroupBox x={325} y={25} w={335} h={206} value={"OUTPUTS"}>
                <Label x={0} y={0} w={75} h={20} value="Active" ></Label>
                <Led x={173} y={0} w={20} h={20} value={1}></Led>
                <Label x={0} y={25} w={75} h={20} value="Outa" ></Label>
                <Led x={173} y={25} w={20} h={20} value={1}></Led>
                <Label x={0} y={50} w={75} h={20} value="Outb" ></Label>
                <Led x={173} y={50} w={20} h={20} value={0}></Led>
                <Label x={0} y={75} w={75} h={20} value="Outc" ></Label>
                <Led x={173} y={75} w={20} h={20} value={0}></Led>
                <Label x={0} y={100} w={75} h={20} value="Outd" ></Label>
                <Led x={173} y={100} w={20} h={20} value={1}></Led>
                <Label x={0} y={125} w={75} h={20} value="Oute" ></Label>
                <Led x={173} y={125} w={20} h={20} value={0}></Led>
                <Label x={0} y={150} w={75} h={20} value="Outf" ></Label>
                <Led x={173} y={150} w={20} h={20} value={0}></Led>
            </GroupBox>
            <GroupBox x={325} y={236} w={335} h={183} value={"READBACKS"}>
                <Label x={0} y={0} w={75} h={20} value="Table Repeat" ></Label>
                <TextRead x={80} y={0} w={205} h={20} value={0}></TextRead>
                <Label x={0} y={25} w={75} h={20} value="Table Line" ></Label>
                <TextRead x={80} y={25} w={205} h={20} value={0}></TextRead>
                <Label x={0} y={50} w={75} h={20} value="Line Repeat" ></Label>
                <TextRead x={80} y={50} w={205} h={20} value={0}></TextRead>
                <Label x={0} y={75} w={75} h={20} value="State" ></Label>
                <TextRead x={80} y={75} w={205} h={20} value={"WAIT_ENABLE"}></TextRead>
                <Label x={0} y={100} w={75} h={20} value="Can write" ></Label>
                <TextRead x={80} y={100} w={205} h={20} value={0}></TextRead>
                <ActionButton x={11} y={125} w={275} h={20} value="All Position Capture Parameters ⧉" openScreen={true} fontSize={14}></ActionButton>
            </GroupBox>
            <Label x={375} y={419} w={65} h={20} value="Health" ></Label>
            <TextRead x={445} y={419} w={205} h={20} value={"OK"}></TextRead>
            <GroupBox x={660} y={25} w={500} h={300} value={"Heater 1"}>
                <Label x={0} y={0} w={225} h={20} value="Heater 1 setpoint demand (D14):" fontSize={12}></Label>
                <TextEntry x={230} y={0} w={230} h={20} value={"<0.0 C>"} disabled={true}></TextEntry>
                <Label x={0} y={25} w={225} h={20} value="Heater 1 setpoint readback (D153):" fontSize={12} ></Label>
                <TextRead x={230} y={25} w={230} h={20} value={"<22.0C>"}></TextRead>
                <Label x={0} y={50} w={225} h={20} value="Heater 1 loop control (D10):" fontSize={12}></Label>
                <ActionButton x={230} y={50} w={230} h={20} value={"Start Heating Loop"} openScreen={false}></ActionButton>
                <Label x={0} y={75} w={225} h={20} value="Heater 1 loop control readback (D11):" fontSize={12} ></Label>
                <TextRead x={230} y={75} w={230} h={20} value={"<Reset Interlocks Request>"}></TextRead>
                <Label x={0} y={100} w={225} h={20} value="Heater 1 loop status (D12):" fontSize={12}></Label>
                <TextRead x={230} y={100} w={230} h={20} value={"<Loop Disabled>"}></TextRead>
                <Label x={0} y={125} w={225} h={20} value="Heater 1 proportional gain (D150):" fontSize={12}></Label>
                <TextEntry x={230} y={125} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={150} w={225} h={20} value="Heater 1 integral gain (D151):" fontSize={12} ></Label>
                <TextEntry x={230} y={150} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={175} w={225} h={20} value="Heater 1 derivative gain (D152):" fontSize={12}></Label>
                <TextEntry x={230} y={175} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={200} w={225} h={20} value="Heater 1 PID loop output 0-100% (D500):" fontSize={12} ></Label>
                <TextRead x={230} y={200} w={230} h={20} value={"<Loop Disabled>"}></TextRead>
                <Label x={0} y={225} w={225} h={20} value="Heater 1 under temp setpoint (D122):" fontSize={12} ></Label>
                <TextEntry x={230} y={225} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={250} w={225} h={20} value="Heater 1 fail alarm (D19):" fontSize={12}></Label>
                <TextRead x={230} y={250} w={230} h={20} value={"<Status OK>"}></TextRead>
            </GroupBox>
            <GroupBox x={660} y={325} w={500} h={300} value={"Heater 2"}>
                <Label x={0} y={0} w={225} h={20} value="Heater 2 setpoint demand (D14):" fontSize={12}></Label>
                <TextEntry x={230} y={0} w={230} h={20} value={"<0.0 C>"} disabled={true}></TextEntry>
                <Label x={0} y={25} w={225} h={20} value="Heater 2 setpoint readback (D153):" fontSize={12}></Label>
                <TextRead x={230} y={25} w={230} h={20} value={"<22.0C>"}></TextRead>
                <Label x={0} y={50} w={225} h={20} value="Heater 2 loop control (D10):" fontSize={12}></Label>
                <ActionButton x={230} y={50} w={230} h={20} value={"Start Heating Loop"} openScreen={false}></ActionButton>
                <Label x={0} y={75} w={225} h={20} value="Heater 2 loop control readback (D11):" fontSize={12} ></Label>
                <TextRead x={230} y={75} w={230} h={20} value={"<Reset Interlocks Request>"}></TextRead>
                <Label x={0} y={100} w={225} h={20} value="Heater 2 loop status (D12):" fontSize={12}></Label>
                <TextRead x={230} y={100} w={230} h={20} value={"<Loop Disabled>"}></TextRead>
                <Label x={0} y={125} w={225} h={20} value="Heater 2 proportional gain (D150):" fontSize={12}></Label>
                <TextEntry x={230} y={125} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={150} w={225} h={20} value="Heater 2 integral gain (D151):" fontSize={12}></Label>
                <TextEntry x={230} y={150} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={175} w={225} h={20} value="Heater 2 derivative gain (D152):" fontSize={12}></Label>
                <TextEntry x={230} y={175} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={200} w={225} h={20} value="Heater 2 PID loop output 0-100% (D500):" fontSize={12}></Label>
                <TextRead x={230} y={200} w={230} h={20} value={"<Loop Disabled>"}></TextRead>
                <Label x={0} y={225} w={225} h={20} value="Heater 2 under temp setpoint (D122):" fontSize={12}></Label>
                <TextEntry x={230} y={225} w={230} h={20} value={"0.000"} disabled={false}></TextEntry>
                <Label x={0} y={250} w={225} h={20} value="Heater 2 fail alarm (D19):" fontSize={12}></Label>
                <TextRead x={230} y={250} w={230} h={20} value={"<Status OK>"}></TextRead>
            </GroupBox>
            <ActionButton x={670} y={625} w={120} h={20} value="Gap Motor" openScreen={true} ></ActionButton>
            <ActionButton x={795} y={625} w={120} h={20} value="Reset Amp Fault" openScreen={true} ></ActionButton>
            <ActionButton x={1030} y={625} w={120} h={20} value="EXIT" openScreen={true} ></ActionButton>
            <ActionButton x={670} y={650} w={120} h={20} value="Home Axes" openScreen={true} ></ActionButton>
        </Box>
    )
}