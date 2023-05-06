import React, { FC } from "react";
import NotificationWrap from "./style";
import { Button, Container, IconButton, Stack } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

const NotificationMessage: FC = () => {
    return (
        <NotificationWrap>
            <Container>
                <Stack
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    direction="row">
                    <h2 style={{ margin: 0, paddingTop: 4 }}>
                        SAVE UP TO <span>35% OFF</span> FOR STARTUP DAYS.
                    </h2>
                    <Button variant="contained">
                        Conversation now
                    </Button>
                </Stack>
            </Container>
            <IconButton className="close-button">
                <CloseOutlined/>
            </IconButton>
        </NotificationWrap>
    );
};

export default NotificationMessage;