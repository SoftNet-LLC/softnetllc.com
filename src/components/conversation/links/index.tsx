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
                Add links of websites/apps that you like
                <BootstrapTooltip
                    title={
                        <>
                            <h3>
                                Why?
                            </h3>
                            <p>
                                By showing us website that you like, it can help us
                                get an understanding of the style you want for your project.
                            </p>
                        </>
                    }
                    placement="top">
                    <Help/>
                </BootstrapTooltip>
            </H2>
            <P3 style={{ color: "#888" }}>
                <i>Examples: <br/>Live Science  |  https://livescience.com</i>
                <i><br/>How To Geek  |  https://howtogeek.com</i>
            </P3>
            {/* <P3 style={{ marginBottom:32, color: "#888" }}>
                <i>Example: NASA  /  https://nasa.gov</i>
            </P3> */}

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
