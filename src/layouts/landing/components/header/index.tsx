import React, { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
    AppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack
} from "@mui/material";
import { Menu, Phone } from "@mui/icons-material";
import { HeaderWrap } from "./style";
import { menus } from "../menu";
import useBreakpoints from "@utils/hooks/breakpoints.hooks";
import { BreakpointType } from "@utils/types/breakpoint.type";
import LogoLink from "./style/logo";
import { LOGO } from "@assets/images";


const LandingHeader: FC = () => {
    const router: any = useRouter();

    const bkp: BreakpointType = useBreakpoints();

    const [open, setOpen] = useState<boolean>(false);


    return (
        <AppBar color="transparent">
            <Container>
                <HeaderWrap>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <LogoLink href="/">
                            <div style={{
                                color: "#ffffff",
                                fontSize: 32,
                                fontWeight: 700,
                                letterSpacing: 2 }}>
                                <span style={{ color: "#e32652", fontFamily: "'Big Shoulders Text', cursive" }}>S</span>
                                <span style={{ letterSpacing: 0, fontFamily: "'Big Shoulders Text', cursive" }}>nT</span>
                            </div>
                        </LogoLink>
                        {
                            bkp === "mob" ? (
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        style={{ color: "#ffffff" }}
                                        color="secondary"
                                        variant="text"
                                        href="tel:(253) 533-2244">
                                        <Phone style={{ fontSize: 16, marginRight: 8 }}/>
                                        (253) 533-2244
                                    </Button>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="secondary"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                        onClick={() => {
                                            setOpen(true)
                                        }}>
                                        <Menu/>
                                    </IconButton>
                                </Stack>
                            ) : (
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        color="secondary"
                                        variant="text"
                                        href="tel:(253) 533-2244">
                                        <Phone style={{ fontSize: 16, marginRight: 8 }}/>
                                        (253) 533-2244
                                    </Button>
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                        onClick={() => {
                                            router.push("/login")
                                        }}>
                                        Login
                                    </Button>
                                    <Button
                                        id="conversation"
                                        className="header-action"
                                        color="primary"
                                        variant="contained"
                                        onClick={() => {
                                            router.push("/conversation")
                                        }}>
                                        Free Estimate
                                    </Button>
                                </Stack>
                            )
                        }

                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={() => {
                                setOpen(false)
                            }}>
                            <div style={{ padding: 12 }}>
                                <List>
                                    {menus.map((menu, i) => (
                                        <ListItem
                                            key={`menu-${i}`}
                                            disablePadding>
                                            <ListItemButton
                                                onClick={() => {
                                                    router.push(menu.link);
                                                }}>
                                                <ListItemText primary={menu.label}/>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                                <Stack
                                    spacing={1}>
                                    <Button
                                        fullWidth
                                        color="primary"
                                        variant="outlined"
                                        size="large"
                                        onClick={() => {
                                            router.push("/login")
                                        }}>
                                        Login
                                    </Button>
                                    <Button
                                        fullWidth
                                        className="header-action"
                                        color="secondary"
                                        variant="contained"
                                        size="large"
                                        onClick={() => {
                                            router.push("/conversation")
                                        }}>
                                        Get a free estimate
                                    </Button>
                                </Stack>
                            </div>
                        </Drawer>
                    </Stack>
                </HeaderWrap>
            </Container>
        </AppBar>
    );
};

export default LandingHeader;
