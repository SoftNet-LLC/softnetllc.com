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
            <H2>
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
                    <FormControlLabel value="d" control={<Radio />} label="1 week" />
                    <FormControlLabel value="w" control={<Radio />} label="1 - 2 weeks" />
                    <FormControlLabel value="m" control={<Radio />} label="1  month" />
                    <FormControlLabel value="mm" control={<Radio />} label="1 - 2 month" />
                    <FormControlLabel value="mmm" control={<Radio />} label="2 - 6 months" />
                    <FormControlLabel value="y" control={<Radio />} label="6 months - 1 year" />
                    <FormControlLabel value="yy" control={<Radio />} label="1 year+" />
                    <FormControlLabel value="cu" control={<Radio />} label="custom" />
                    <FormControlLabel value="no" control={<Radio />} label="I don't know" />
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
                    disabled
                    size="large"
                    color="secondary"
                    variant="contained">
                    Okay
                </Button>
                <div>
                    press <b>Enter</b> ↵
                </div>
            </Stack>
        </div>
    );
};

export default ConversationDeadline;
