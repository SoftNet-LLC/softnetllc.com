import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FooterWrap from "./style/wrap";
import LogoLink from "./style/logo";
import { BreakpointType } from "@utils/types/breakpoint.type";
import useBreakpoints from "@utils/hooks/breakpoints.hooks";
import { H2 } from "@components/shared/heading";
import { P2 } from "@components/shared/paragraph";
import { LOGO_LIGHT } from "@assets/images";

const LandingFooter: FC = () => {
    const bkp: BreakpointType = useBreakpoints();

    return (
        <FooterWrap>
            {
                bkp === "web" ? (
                    <Container>
                        <Stack
                            direction="row"
                            justifyContent="space-between">
                            <div
                                style={{
                                    maxWidth: 450,
                                }}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}>
                                    <LogoLink href="/">
                                        <Image
                                            src={LOGO_LIGHT}
                                            width="51"
                                            height="38"
                                            alt="SoftNet.LLC Logo"
                                            placeholder="blur"/>
                                    </LogoLink>
                                    <H2 color="light">SOFTNET.LLC</H2>
                                </Stack>
                                <P2
                                    color="light"
                                    style={{
                                        padding: 8,
                                        marginTop: 16,
                                    }}>
                                    Softnet.llc is the industry that is providing the
                                    IT services
                                </P2>

                                <Stack direction="row">
                                    <IconButton
                                        aria-label="linkedin"
                                        size="large"
                                        color="secondary">
                                        <LinkedInIcon
                                            sx={{
                                                fontSize: 28,
                                            }}
                                        />
                                    </IconButton>

                                    <IconButton
                                        aria-label="twitter"
                                        size="large"
                                        color="secondary">
                                        <TwitterIcon
                                            sx={{
                                                fontSize: 28,
                                            }}
                                        />
                                    </IconButton>

                                    <IconButton
                                        size="large"
                                        aria-label="facebook"
                                        color="secondary">
                                        <FacebookIcon
                                            sx={{
                                                fontSize: 28,
                                            }}
                                        />
                                    </IconButton>
                                </Stack>
                            </div>

                            <div>
                                <li>Main Links</li>
                                <Link
                                    href="/"
                                    className="nav-link">
                                    How it works
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Questions & Answers
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Our Blogs
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Reviews
                                </Link>
                            </div>

                            <div>
                                <li>Services</li>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Contact Us
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Conversation
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Track Project
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Sign up
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Sign in
                                </Link>
                            </div>

                            <div>
                                <li>About Us</li>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Terms and Conditions
                                </Link>

                                <Link
                                    href="/"
                                    className="nav-link">
                                    Privacy Policy
                                </Link>
                            </div>
                        </Stack>
                    </Container>
                ) : (
                    <Container>
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}>
                            <LogoLink href="/">
                                <Image
                                    src={LOGO_LIGHT}
                                    width="51"
                                    height="38"
                                    alt="SoftNet.LLC Logo"
                                    placeholder="blur"/>
                            </LogoLink>
                            <H2 color="light">
                                SOFTNET.LLC
                            </H2>
                        </Stack>
                        <P2
                            color="light"
                            style={{
                                padding: "8px",
                                marginTop: 12,
                                marginBottom: 12,
                            }}>
                            Softnet.llc is the industry that is providing the IT services
                        </P2>
                        <Stack direction="row">
                            <IconButton
                                aria-label="linkedin"
                                size="large"
                                color="secondary">
                                <LinkedInIcon
                                    sx={{
                                        fontSize: 28,
                                    }}/>
                            </IconButton>

                            <IconButton
                                aria-label="twitter"
                                size="large"
                                color="secondary">
                                <TwitterIcon
                                    sx={{
                                        fontSize: 28,
                                    }}/>
                            </IconButton>

                            <IconButton
                                aria-label="facebook"
                                size="large"
                                color="secondary">
                                <FacebookIcon
                                    sx={{
                                        fontSize: 28,
                                    }}/>
                            </IconButton>
                        </Stack>
                    </Container>
                )
            }
            <div className="copy-right">
                <Container>
                    <p>
                        Copyright {new Date().getFullYear()} © <Link href="https://softnetllc.com">softnet.llc</Link>
                        &nbsp;&nbsp;Developed by <Link href="https://nicholijin.com" target="_blank">Nicholi Jin</Link>
                    </p>
                </Container>
            </div>
        </FooterWrap>
    );
};

export default LandingFooter;
