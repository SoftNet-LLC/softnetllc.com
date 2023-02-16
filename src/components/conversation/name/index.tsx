import React, { FC } from "react";
import { H2, H3 } from "@components/shared/heading";
import Label from "@components/shared/input/label";
import { Button, Stack, TextField } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help } from "@mui/icons-material";
import { nextEvent, updateFieldEvent } from "@store/converstaion/events";
import { useStore } from "effector-react";
import { $conversation } from "@store/converstaion/state";

const ConversationName: FC = () => {
    const cvs = useStore($conversation);

    return (
        <div>
            <H2>
                What is your Name
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                Why we need your name?
                            </h3>
                            <p>
                                We need your name because we will need to register your name.
                                Please let us know your name by write your full name.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <Label htmlFor="name">Your Name*</Label>
            <TextField
                placeholder="Enter Your Name"
                name="name"
                id="name"
                value={cvs.data.name}
                onChange={(e)=>{updateFieldEvent({ name: e.target.value })}}
                fullWidth/>
            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    onClick={()=>{nextEvent("welcome")}}
                    disabled={!cvs?.data?.name}
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

export default ConversationName;
