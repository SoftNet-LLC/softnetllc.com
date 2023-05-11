import React, { FC } from "react";
import { H2 } from "@components/shared/heading";
import {
    Button,
    FormControl,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Stack,
    TextField
} from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help } from "@mui/icons-material";
import Label from "@components/shared/input/label";

const ConversationDeadline: FC = () => {
    const [value, setValue] = React.useState("female");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div>
            <H2 color="light">
                How soon do you need it completed?
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                Why?
                            </h3>
                            <p>
                                Urgency helps us to allocate our personnel.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <FormControl>
                <Label htmlFor="deadline">* Your expectation for deadline</Label>
                <RadioGroup
                    aria-labelledby="deadline"
                    name="deadline"
                    value={value}
                    onChange={handleChange}>
                    <FormControlLabel style={{ color: "#808080" }} value="d" control={<Radio style={{ color: "#ffffff" }}/>} label="1 week" />
                    <FormControlLabel style={{ color: "#808080" }} value="w" control={<Radio style={{ color: "#ffffff" }}/>} label="1 - 2 weeks" />
                    <FormControlLabel style={{ color: "#808080" }} value="m" control={<Radio style={{ color: "#ffffff" }}/>} label="1  month" />
                    <FormControlLabel style={{ color: "#808080" }} value="mm" control={<Radio style={{ color: "#ffffff" }}/>} label="1 - 2 month" />
                    <FormControlLabel style={{ color: "#808080" }} value="mmm" control={<Radio style={{ color: "#ffffff" }}/>} label="2 - 6 months" />
                    <FormControlLabel style={{ color: "#808080" }} value="y" control={<Radio style={{ color: "#ffffff" }}/>} label="6 months - 1 year" />
                    <FormControlLabel style={{ color: "#808080" }} value="yy" control={<Radio style={{ color: "#ffffff" }}/>} label="1 year+" />
                    <FormControlLabel style={{ color: "#808080" }} value="cu" control={<Radio style={{ color: "#ffffff" }}/>} label="custom" />
                    <FormControlLabel style={{ color: "#808080" }} value="no" control={<Radio style={{ color: "#ffffff" }}/>} label="I don't know" />
                </RadioGroup>
            </FormControl>
            {
                value === "cu" && (
                    <Stack direction="row">
                        <TextField type="number"/>
                        <Select
                            id="subject"
                            name="subject">
                            <MenuItem value={"d"}>Days</MenuItem>
                            <MenuItem value={"w"}>Weeks</MenuItem>
                            <MenuItem value={"m"}>Months</MenuItem>
                            <MenuItem value={"y"}>Years</MenuItem>
                        </Select>
                    </Stack>
                )
            }
            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    disabled={false}
                    size="large"
                    color="primary"
                    variant="contained">
                    Okay
                </Button>
                <div style={{ color: "#808080" }}>
                    press <b>Enter</b> ↵
                </div>
            </Stack>
        </div>
    );
};

export default ConversationDeadline;
