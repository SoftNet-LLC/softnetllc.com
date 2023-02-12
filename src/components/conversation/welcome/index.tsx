import React, { FC } from "react";
import { Button, Stack } from "@mui/material";
import { P1 } from "@components/shared/paragraph";
import { nextEvent } from "@store/converstaion/events";

const ConversationWelcome: FC = () => {
    const name = "Nicholi"

    return (
        <div>
            <P1 className="talk">
                <i>💬 Hi <b>{name}</b>,</i>
            </P1>
            <P1 className="talk">
                <i><b>Thanks</b> for using our service.</i>
            </P1>
            <P1 className="talk">
                <i>
                    Please write to us to discuss your digital project.
                    We need some <b>information</b> about your project to understand how we can help you.
                </i>
            </P1>

            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    onClick={()=>{nextEvent("email")}}
                    size="large"
                    color="secondary"
                    variant="contained">
                    Let's go
                </Button>
                <div>
                    press <b>Enter</b> ↵
                </div>
            </Stack>
        </div>
    );
};

export default ConversationWelcome;
