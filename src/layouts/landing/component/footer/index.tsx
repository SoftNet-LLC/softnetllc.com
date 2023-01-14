import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { LogoLink, FooterWrap } from "./styles";
import { H4 } from "components/shared/heading";
import { P2 } from "components/shared/paragraph";
import LightLogoPicture from "assets/images/logo-light.png"
import useBreakpoints, { BreakpointType } from "utils/hooks/breakpoints.hooks";

const LandingFooter: FC = () =>
{
    const bkp: BreakpointType = useBreakpoints();

    return (
        <FooterWrap>
            {
                bkp === "web" ? (
                    <Container>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                        >
                            <div
                                style={{
                                    maxWidth: 450,
                                }}
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Link href="/">
                                        <LogoLink>
                                            <Image
                                                src={LightLogoPicture}
                                                width="51"
                                                height="38"
                                                alt="SoftNet.LLC Logo"
                                                placeholder="blur"
                                            />
                                        </LogoLink>
                                    </Link>
                                    <H4 color="light">SOFTNET.LLC</H4>
                                </Stack>
                                <P2
                                    color="light"
                                    style={{
                                        padding: 8,
                                        marginTop: 16,
                                    }}
                                >
                                    Softnet.llc is the industry that is providing the
                                    IT services
                                </P2>

                                <Stack direction="row">
                                    <IconButton size="large" color="secondary">
                                        <LinkedInIcon
                                            sx={{
                                                fontSize: 28,
                                            }}
                                        />
                                    </IconButton>

                                    <IconButton size="large" color="secondary">
                                        <TwitterIcon
                                            sx={{
                                                fontSize: 28,
                                            }}
                                        />
                                    </IconButton>

                                    <IconButton size="large" color="secondary">
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
                                <Link href="/">
                                    <a className="nav-link">How it works</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Questions & Answers</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Our Blogs</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Testminals</a>
                                </Link>
                            </div>

                            <div>
                                <li>Services</li>

                                <Link href="/">
                                    <a className="nav-link">Contact Us</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Conversation</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Track Project</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Sign up</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Sign in</a>
                                </Link>
                            </div>

                            <div>
                                <li>About Us</li>

                                <Link href="/">
                                    <a className="nav-link">Terms and Conditions</a>
                                </Link>

                                <Link href="/">
                                    <a className="nav-link">Privacy Policy</a>
                                </Link>
                            </div>
                        </Stack>
                    </Container>
                ) : (
                    <Container>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Link href="/">
                                <LogoLink>
                                    <Image
                                        src={LightLogoPicture}
                                        width="51"
                                        height="38"
                                        alt="SoftNet.LLC Logo"
                                        placeholder="blur"
                                    />
                                </LogoLink>
                            </Link>
                            <H4 color="light">SOFTNET.LLC</H4>
                        </Stack>
                        <P2
                            color="light"
                            style={{
                                padding: "8px",
                                marginTop: 12,
                                marginBottom: 12,
                            }}
                        >
                            Softnet.llc is the industry that is providing the
                            IT services
                        </P2>
                        <Stack direction="row">
                            <IconButton size="large" color="secondary">
                                <LinkedInIcon
                                    sx={{
                                        fontSize: 28,
                                    }}
                                />
                            </IconButton>

                            <IconButton size="large" color="secondary">
                                <TwitterIcon
                                    sx={{
                                        fontSize: 28,
                                    }}
                                />
                            </IconButton>

                            <IconButton size="large" color="secondary">
                                <FacebookIcon
                                    sx={{
                                        fontSize: 28,
                                    }}
                                />
                            </IconButton>
                        </Stack>
                    </Container>
                )
            }
            <div
                style={{
                    marginTop: 12,
                    color: "#aaa",
                    textTransform: "uppercase",
                    backgroundColor: "#1f1f1f",
                    padding: "20px 12px",
                }}
            >
                <Container>
                    <p style={{ fontSize: 12 }}>
                        Copyright 2020 © softnet.llc
                    </p>
                </Container>
            </div>
        </FooterWrap>
    );
};

export default LandingFooter;
