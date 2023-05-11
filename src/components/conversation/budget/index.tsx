import React, { FC } from "react";
import { H2 } from "@components/shared/heading";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help } from "@mui/icons-material";
import Label from "@components/shared/input/label";

const ConversationBudget: FC = () => {
    const [value, setValue] = React.useState("female");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div>
            <H2 color="light">
                What is your budget for this project?
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                Why do we ask this?
                            </h3>
                            <p>
                                Your budget gives us an idea of the project scope.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <FormControl>
                <Label htmlFor="budget">*Your Budget</Label>
                <RadioGroup
                    aria-labelledby="budget"
                    name="budget"
                    value={value}
                    onChange={handleChange}>
                    <FormControlLabel style={{ color: "#808080" }} value="$" control={<Radio style={{ color: "#ffffff" }}/>} label="$500 - $700" />
                    <FormControlLabel style={{ color: "#808080" }} value="$$" control={<Radio style={{ color: "#ffffff" }}/>} label="$800 - $1,500" />
                    <FormControlLabel style={{ color: "#808080" }} value="$$$" control={<Radio style={{ color: "#ffffff" }}/>} label="$1,600 - $5,000" />
                    <FormControlLabel style={{ color: "#808080" }} value="$$$$" control={<Radio style={{ color: "#ffffff" }}/>} label="$5,000 - $10,000" />
                    <FormControlLabel style={{ color: "#808080" }} value="$$$$$" control={<Radio style={{ color: "#ffffff" }}/>} label="$10,000 - $30,000" />
                    <FormControlLabel style={{ color: "#808080" }} value="$$$$$$" control={<Radio style={{ color: "#ffffff" }}/>} label="$30,000 - $60,000" />
                    <FormControlLabel style={{ color: "#808080" }} value="$$$$$$$" control={<Radio style={{ color: "#ffffff" }}/>} label="$60,000 - $120,000" />
                    <FormControlLabel style={{ color: "#808080" }} value="$$$$$$$$" control={<Radio style={{ color: "#ffffff" }}/>} label="$120,000+" />
                    <FormControlLabel style={{ color: "#808080" }} value="no" control={<Radio style={{ color: "#ffffff" }}/>} label="I don't know yet" />
                </RadioGroup>
            </FormControl>
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

export default ConversationBudget;
