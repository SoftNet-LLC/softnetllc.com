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
                        color="secondary"
                        sx={{
                            height: 8
                        }}
                        value={(pageMap[cvs?.current]?.[2]-1) * 10}
                        variant={cvs.loading ? "indeterminate" : "determinate"}/>
                </div>
                <Link href="/">
                    <Image
                        className="logo-image"
                        src={LOGO}
                        alt="Logo"/>
                </Link>
                <H1>Conversation</H1>
                <div className="widget-content">
                    {children}
                </div>
                <div className="action-area">
                    <Container>
                        <Stack
                            justifyContent="center"
                            direction="row">
                            {
                                !pageMap[cvs?.current]?.[0] ? (
                                    <BootstrapTooltip
                                        placement="top"
                                        title="Go to Back">
                                        <Button
                                            onClick={()=>{nextEvent(pageMap[cvs.current]?.[1] || "name")}}
                                            color="secondary"
                                            variant="outlined">
                                            <ArrowBackIosOutlined/>
                                        </Button>
                                    </BootstrapTooltip>
                                ) : (
                                    <Button
                                        disabled
                                        color="secondary"
                                        variant="outlined">
                                        <ArrowBackIosOutlined/>
                                    </Button>
                                )

                            }
                            <Button
                                style={{
                                    borderLeft: "none",
                                    borderRight: "none"
                                }}
                                disabled
                                color="secondary"
                                variant="outlined">
                                {pageMap[cvs?.current]?.[2] > 10 ? 10 : pageMap[cvs?.current]?.[2]}/10
                            </Button>
                            <BootstrapTooltip
                                placement="top"
                                title="Go to Next">
                                <Button
                                    onClick={()=>{nextEvent(pageMap[cvs.current]?.[4] || "name")}}
                                    disabled={pageMap[cvs?.current]?.[3]}
                                    color="secondary"
                                    variant="outlined">
                                    <ArrowForwardIosOutlined/>
                                </Button>
                            </BootstrapTooltip>
                        </Stack>
                        <P3>Powered by Softnet.LLC</P3>
                    </Container>
                </div>
            </ConversationWrap>
        </Fragment>
    );
};


export default ConversationLayout;
