import React, { FC } from "react";
import { useRouter } from "next/router";
import { Button, Stack } from "@mui/material";
import { P1 } from "@components/shared/paragraph";

const ConversationFinish: FC = () => {
    const name = "Nicholi"
    const router: any = useRouter();


    return (
        <div>
            <P1 className="talk">
                <i>💬 That's it! You're all done.</i>
            </P1>
            <P1 className="talk">
                <i><b>Your Inquiry</b> has been submitted...</i>
            </P1>
            <P1 className="talk">
                <i>
                    We will reply as soon as possible.
                </i>
            </P1>

            <P1 className="talk">
                <i>
                    Would you like to create an account for management and progress-tracking on our system?
                </i>
            </P1>

            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    onClick={()=>{router.push("/login")}}
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
