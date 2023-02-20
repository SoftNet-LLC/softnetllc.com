import React, { FC, useState } from "react";
import { Button, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { P1 } from "@components/shared/paragraph";

const ConversationAdditional: FC = () => {
    const name = "Nicholi"

    const [check, setCheck] = useState<boolean>(false);

    return (
        <div>
            <P1 className="talk">
                <i>
                    Do you want to add more details such as files or reference links?
                </i>
            </P1>

            <P1
                style={{ marginBottom: 42 }}
                className="talk">
                <i>
                    If yes, please check the box below. If not, click finish.
                </i>
            </P1>

            <FormControlLabel
                control={
                    <Checkbox
                        value={check}
                        onChange={(e, value)=>{setCheck(value)}}/>
                }
                label="Add more Details"/>

            <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>
                <Button
                    size="large"
                    color="secondary"
                    variant="contained">
                    {check ? "Add more details" : "Finish"}
                </Button>
                <div>
                    press <b>Enter</b> ↵
                </div>
            </Stack>
        </div>
    );
};

export default ConversationAdditional;
