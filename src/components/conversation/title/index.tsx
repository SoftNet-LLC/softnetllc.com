import React, { FC } from "react";
import { H2, H3 } from "@components/shared/heading";
import Label from "@components/shared/input/label";
import { Button, Stack, TextField } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help } from "@mui/icons-material";

const ConversationTitle: FC = () => {

    return (
        <div>
            <H2>
                What is your Project name?
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                            Why?
                            </h3>
                            <p>
                                Every good project starts with a name.<br/>
                                Skip it, if you don't have one yet.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <Label htmlFor="title">Your Project Name</Label>
            <TextField
                placeholder="Enter Your Project name (or skip it)"
                name="title"
                id="title"
                fullWidth/>
            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                style={{ marginTop: 24 }}>
                <Stack
                    spacing={2}
                    direction="row"
                    alignItems="center">
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
                <Button
                    style={{ marginLeft: 32 }}
                    size="large"
                    color="secondary"
                    variant="text">
                    Skip this
                </Button>
            </Stack>
        </div>
    );
};

export default ConversationTitle;
