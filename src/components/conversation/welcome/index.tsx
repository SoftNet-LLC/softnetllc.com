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
                <i><b>Thanks</b> for considering us for your digital project.</i>
            </P1>
            <P1 className="talk">
                <i>
                    Let's quickly discuss your project.<br/>
                    We need just a little <b>information</b> about your project...
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
                    color="primary"
                    variant="contained">
                    Let's go
                </Button>
                <div style={{ color: "#808080" }}>
                    press <b>Enter</b> ↵
                </div>
            </Stack>
        </div>
    );
};

export default ConversationWelcome;
