import React, { FC } from "react";
import { H2 } from "@components/shared/heading";
import Label from "@components/shared/input/label";
import { Button, Stack, TextField } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { Help } from "@mui/icons-material";
import { nextEvent, updateFieldEvent } from "@store/converstaion/events";
import { useStore } from "effector-react";
import { $conversation } from "@store/converstaion/state";

const ConversationPhone: FC = () => {
    const cvs = useStore($conversation);

    return (
        <div>
            <H2>
                What is your Phone Number
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                Why phone number?
                            </h3>
                            <p>
                                If you allow us and email is no response, we will give you a call in a day.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <Label htmlFor="phone">Your Phone Number*</Label>
            <TextField
                value={cvs?.data?.phone}
                onChange={(e)=>{updateFieldEvent({ phone: e.target.value })}}
                placeholder="Enter Your Phone Number"
                name="phone"
                id="phone"
                fullWidth/>
            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    onClick={()=>{nextEvent("title")}}
                    disabled={!cvs?.data?.phone}
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

export default ConversationPhone;
