import React, { FC } from "react";
import { Button, Stack } from "@mui/material";
import { P1 } from "@components/shared/paragraph";

const ConversationFinish: FC = () => {
    const name = "Nicholi"

    return (
        <div>
            <P1 className="talk">
                <i>💬 Thank you very much</i>
            </P1>
            <P1 className="talk">
                <i><b>Thanks</b> for using our service.</i>
            </P1>
            <P1 className="talk">
                <i>
                    We will response you as soon as possible. Normally, we respond for all request in a day.
                </i>
            </P1>

            <P1 className="talk">
                <i>
                    Do you want to create an account on our management system?
                </i>
            </P1>

            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    size="large"
                    color="secondary"
                    variant="contained">
                    Create Account
                </Button>
                <Button
                    size="large"
                    color="secondary"
                    variant="outlined">
                    No, Thanks
                </Button>
            </Stack>
        </div>
    );
};

export default ConversationFinish;
