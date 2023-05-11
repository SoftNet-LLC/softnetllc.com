import React, { FC, Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, LinearProgress, Stack } from "@mui/material";
import { LayoutType } from "@utils/types/layout.type";
import { LOGO } from "@assets/images";
import SeoHead from "@components/shared/seo/head";
import { H1 } from "@components/shared/heading";
import ConversationWrap from "./style/wrap";
import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined
} from "@mui/icons-material";
import { P3 } from "@components/shared/paragraph";
import BootstrapTooltip from "@components/shared/tooltip";
import { useStore } from "effector-react";
import { $conversation } from "@store/converstaion/state";
import { nextEvent } from "@store/converstaion/events";
import LogoLink from "../landing/components/header/style/logo";

const pageMap: any = {
    name: [true, "", 1, false, "welcome"],
    welcome: [false, "name", 2, false, "email"],
    email: [false, "welcome", 2, false, "phone"],
    phone: [false, "email", 3, false, "title"],
    title: [false, "phone", 4, false, "description"],
    description: [false, "title", 5, false, "budget"],
    budget: [false, "description", 6, false, "deadline"],
    deadline: [false, "budget", 7, false, "contacts"],
    contacts: [false, "deadline", 8, false, "additional"],
    additional: [false, "contacts", 8, false, "links"],
    links: [false, "additional", 9, false, "files"],
    files: [false, "links", 10, false, "finish"],
    finish: [false, "files", 11, true, ""],
}

const ConversationLayout: FC<LayoutType> = (props) => {
    const { seo, children } = props
    const cvs = useStore($conversation);

    return (
        <Fragment>
            <SeoHead {...seo} />
            <ConversationWrap>
                <div className="progress-bar">
                    <LinearProgress
                        color="primary"
                        sx={{
                            height: 8
                        }}
                        value={(pageMap[cvs?.current]?.[2]-1) * 10}
                        variant={cvs.loading ? "indeterminate" : "determinate"}/>
                </div>
                <div className="conversation-header">
                    <Container>
                        <LogoLink href="/">
                            <div
                                style={{
                                    color: "#ffffff",
                                    fontSize: 32,
                                    fontWeight: 700,
                                    letterSpacing: 2 }}>
                                <span style={{ color: "#e32652", fontFamily: "'Big Shoulders Text', cursive" }}>S</span>
                                <span style={{ letterSpacing: 0, fontFamily: "'Big Shoulders Text', cursive" }}>nT</span>
                            </div>
                        </LogoLink>
                        <H1 style={{ color: "#ffffff" }}>Conversation</H1>
                    </Container>
                </div>
                <div className="widget-content">
                    {children}
                </div>
                <div className="action-area">
                    <Container>
                        <Stack
                            spacing={2}
                            alignItems="center"
                            justifyContent="center"
                            direction="row">
                            {
                                !pageMap[cvs?.current]?.[0] ? (
                                    <BootstrapTooltip
                                        placement="top"
                                        title="Go to Back">
                                        <Button
                                            size="large"
                                            onClick={()=>{nextEvent(pageMap[cvs.current]?.[1] || "name")}}
                                            color="primary"
                                            variant="contained">
                                            <ArrowBackIosOutlined style={{ color: "#ffffff" }}/>
                                        </Button>
                                    </BootstrapTooltip>
                                ) : (
                                    <Button
                                        disabled
                                        size="large"
                                        color="secondary"
                                        variant="contained">
                                        <ArrowBackIosOutlined style={{ color: "#ffffff" }}/>
                                    </Button>
                                )

                            }
                            <div
                                style={{
                                    color: "#ffffff"
                                }}>
                                {pageMap[cvs?.current]?.[2] > 10 ? 10 : pageMap[cvs?.current]?.[2]}/10
                            </div>
                            <BootstrapTooltip
                                placement="top"
                                title="Go to Next">
                                <Button
                                    size="large"
                                    aria-label="Next Button"
                                    onClick={()=>{nextEvent(pageMap[cvs.current]?.[4] || "name")}}
                                    disabled={pageMap[cvs?.current]?.[3]}
                                    color="primary"
                                    variant="contained">
                                    <ArrowForwardIosOutlined style={{ color: "#ffffff" }}/>
                                </Button>
                            </BootstrapTooltip>
                        </Stack>
                        <P3 style={{ color: "#808080" }}>Powered by Softnet.LLC</P3>
                    </Container>
                </div>
            </ConversationWrap>
        </Fragment>
    );
};


export default ConversationLayout;
