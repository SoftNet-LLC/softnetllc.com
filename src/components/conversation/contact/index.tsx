import React, { FC, Fragment, useState } from "react";
import uuid from "react-uuid";
import { Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { H2 } from "@components/shared/heading";
import BootstrapTooltip from "@components/shared/tooltip";
import { AddOutlined, Close, Help } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";

const ConversationContacts: FC = () => {
    const [contacts, setContacts] = useState<any[]>([]);

    const changeHandle = (item: any, name: string, event: any) => {
        setContacts([
            ...contacts.map((i) => {
                if (i.id === item.id) {
                    i[name] = event.target.value
                }
                return i
            })
        ])
    }

    return (
        <div>
            <H2>
                Add more contacts to get our response
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
            <Grid
                style={{ width: "100%" }}
                spacing={1}
                justifyContent="center"
                container>
                {
                    contacts.map((i: any) => (
                        <Fragment key={i.id}>
                            <Grid lg={3}>
                                <Select
                                    fullWidth
                                    value={i.role || "owner"}
                                    onChange={(e) => {
                                        changeHandle(i, "role", e)
                                    }}
                                    placeholder="Select Role"
                                    id={`subject-${i.id}`}
                                    name={`subject-${i.id}`}>
                                    <MenuItem value={"owner"}>OWNER</MenuItem>
                                    <MenuItem value={"cto"}>CTO</MenuItem>
                                    <MenuItem value={"ceo"}>CEO</MenuItem>
                                    <MenuItem value={"manager"}>Manager</MenuItem>
                                    <MenuItem value={"developer"}>Developer</MenuItem>
                                </Select>
                            </Grid>
                            <Grid lg={4}>
                                <TextField
                                    value={i.name || ""}
                                    onChange={(e) => {
                                        changeHandle(i, "name", e)
                                    }}
                                    placeholder="Enter Name"
                                    name={`name-${i.id}`}
                                    id={`name-${i.id}`}
                                    fullWidth/>
                            </Grid>
                            <Grid lg={4}>
                                <TextField
                                    value={i.email || ""}
                                    onChange={(e) => {
                                        changeHandle(i, "email", e)
                                    }}
                                    placeholder="Enter Email"
                                    name={`email-${i.id}`}
                                    id={`email-${i.id}`}
                                    fullWidth/>
                            </Grid>
                            <Grid lg={1}>
                                <Button
                                    onClick={() => {
                                        setContacts(contacts.filter((x) => x.id !== i.id))
                                    }}
                                    color="secondary"
                                    style={{ height: "100%" }}
                                    size="large"
                                    fullWidth>
                                    <Close/>
                                </Button>
                            </Grid>
                        </Fragment>
                    ))
                }
                <Grid>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setContacts([...contacts, { id: uuid() }])
                        }}
                        size="large">
                        <AddOutlined/>
                        Add More Contact
                    </Button>
                </Grid>
            </Grid>


            <Stack
                justifyContent="space-between"
                spacing={2}
                direction="row"
                alignItems="center"
                style={{ marginTop: 24 }}>

                <Stack
                    spacing={2}
                    alignItems="center"
                    direction="row">
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

export default ConversationContacts;
