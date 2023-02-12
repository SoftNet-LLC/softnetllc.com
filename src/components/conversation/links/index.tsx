import React, { FC, Fragment, useState } from "react";
import { H2 } from "@components/shared/heading";
import Label from "@components/shared/input/label";
import { Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import BootstrapTooltip from "@components/shared/tooltip";
import { AddOutlined, Close, Help } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import uuid from "react-uuid";
import { P3 } from "@components/shared/paragraph";

const ConversationLinks: FC = () => {
    const [contacts, setContacts] = useState<any[]>([]);

    const changeHandle = (item: any, name: string, event: any) => {
        setContacts([
            ...contacts.map((i) => {
                if(i.id === item.id) {
                    i[name] = event.target.value
                }
                return i
            })
        ])
    }

    return (
        <div>
            <H2>
                Add reference links to help us understand
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
            <P3 style={{ color: "#888" }}>
                <i>Example: Name - Hosting  ||  Address - https://aws.amazon.com</i>
            </P3>
            <P3 style={{ marginBottom:32, color: "#888" }}>
                <i>Example: Name - Website  ||  Address - https://www.softnetllc.com</i>
            </P3>

            <Grid
                style={{ width: "100%" }}
                spacing={1}
                justifyContent="center"
                container>
                {
                    contacts.map((i: any) =>(
                        <Fragment key={i.id}>
                            <Grid lg={4}>
                                <TextField
                                    value={i.name || ""}
                                    onChange={(e)=>{changeHandle(i, "name", e)}}
                                    placeholder="Enter Link Name"
                                    fullWidth/>
                            </Grid>
                            <Grid lg={7}>
                                <TextField
                                    value={i.email || ""}
                                    onChange={(e)=>{changeHandle(i, "email", e)}}
                                    placeholder="Enter Link Address"
                                    fullWidth/>
                            </Grid>
                            <Grid lg={1}>
                                <Button
                                    onClick={()=>{setContacts(contacts.filter((x)=>x.id!==i.id))}}
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
                        onClick={()=>{setContacts([...contacts, { id: uuid() }])}}
                        size="large">
                        <AddOutlined/>
                        Add Reference Link
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
                    direction="row"
                    alignItems="center">
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

export default ConversationLinks;
