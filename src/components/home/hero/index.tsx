import React, { FC, useEffect } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { H1 } from "@components/shared/heading";
import { P1 } from "@components/shared/paragraph";
import { ActionButton } from "@components/shared/button";
import HomeHeroWrap from "./style/wrap";

const HomeHero: FC = () => {
    useEffect(() => {
        animate();
    }, []);

    return (
        <HomeHeroWrap id="home-hero">
            <video autoPlay muted loop id="home-hero-video">
                <source src="https://file.softnetllc.com/home2.mp4"/>
            </video>
            <Container>
                <Grid container>
                    <Grid
                        lg={7}
                        md={8}
                        sm={10}
                        xs={12}>
                        <Grid
                            container
                            spacing={2}>
                            <Grid
                                xs={12}>
                                <H1 color="light" id="home-hero-title">
                                    Start your project with the SoftNet.LLC
                                </H1>
                            </Grid>
                            <Grid
                                xs={12}>
                                <P1
                                    color="light"
                                    id="home-hero-subtitle"
                                    style={{
                                        marginBottom: 32
                                    }}>
                                    Full-stack design, development & support
                                    with experience of over 500 delivering web
                                    and mobile apps.
                                </P1>
                            </Grid>
                            <Grid
                                xs={12}
                                lg={5}>
                                <ActionButton
                                    href="/conversation"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    id="home-hero-btn1"
                                    fullWidth>
                                    Start Conversation
                                </ActionButton>
                            </Grid>
                            <Grid
                                xs={12}
                                lg={5}>
                                <ActionButton
                                    href="/services"
                                    variant="outlined"
                                    color="secondary"
                                    size="large"
                                    className="light"
                                    id="home-hero-btn2"
                                    fullWidth>
                                    Learn More Services
                                </ActionButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </HomeHeroWrap>
    );
};

const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({})
        .fromTo(
            "#home-hero-video",
            {
                opacity: 0,
                delay: 2.8
            },
            {
                opacity: 1,
                duration: 2.8
            }
        )

        .fromTo(
            "#home-hero-title",
            {
                opacity: 0,
                x: 50,
            },
            {
                opacity: 1,
                x: 0,
            }
        )

        .fromTo(
            "#home-hero-subtitle",
            {
                opacity: 0,
                x: -50,
            },
            {
                opacity: 1,
                x: 0,
            }
        )

        .fromTo(
            "#home-hero-btn1",
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
            }
        )

        .fromTo(
            "#home-hero-btn2",
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
            }
        );
};

export default HomeHero;
