import React, { FC } from "react";
import { H2, H3 } from "@components/shared/heading";
import Label from "@components/shared/input/label";
import { Button, Stack, TextField } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help } from "@mui/icons-material";

const ConversationDescription: FC = () => {

    return (
        <div>
            <H2 color="light">
                Tell us about your project
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                What should I say?
                            </h3>
                            <p>
                                Write a description about your project.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <TextField
                multiline
                rows={5}
                placeholder="Enter Your Project description (or skip it)"
                name="description"
                id="description"
                fullWidth/>
            <Stack
                justifyContent="space-between"
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Stack
                    spacing={2}
                    direction="row"
                    alignItems="center">
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
                <Button
                    style={{ marginLeft: 32 }}
                    size="large"
                    color="primary"
                    variant="text">
                    Skip this
                </Button>
            </Stack>
        </div>
    );
};

export default ConversationDescription;
