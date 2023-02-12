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
            <H2>
                How much budget do you have for the development
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                What do you need to write?
                            </h3>
                            <p>
                                You can write short description that you want to get help from us.
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
                    <FormControlLabel value="$" control={<Radio />} label="0 - $5,000" />
                    <FormControlLabel value="$$" control={<Radio />} label="$5,000 - $10,000" />
                    <FormControlLabel value="$$$" control={<Radio />} label="$10,000 - $30,000" />
                    <FormControlLabel value="$$$$" control={<Radio />} label="$30,000 - $60,000" />
                    <FormControlLabel value="$$$$$" control={<Radio />} label="$60,000 - $120,000" />
                    <FormControlLabel value="$$$$$$" control={<Radio />} label="$120,000+" />
                    <FormControlLabel value="no" control={<Radio />} label="I don't know" />
                </RadioGroup>
            </FormControl>
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

export default ConversationBudget;
