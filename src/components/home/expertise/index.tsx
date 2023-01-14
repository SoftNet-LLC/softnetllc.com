import React, { FC, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { H2 } from "components/shared/heading";
import { P1 } from "components/shared/paragraph";
import { HomeExpertiseWrap } from "./styles";
import { ActionButton } from "components/shared/button";

const HomeExpertise: FC = () => 
{
    useEffect(() => 
    {
        animate();
    }, []);

    return (
        <HomeExpertiseWrap id="home-expertise">
            <Container>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item lg={12} xs={12}>
                        <H2 id="home-expertise-title">Our expertise</H2>
                    </Grid>

                    <Grid item lg={4} xs={12}>
                        <P1 id="home-expertise-content1">
                            We design, develop and maintain high-performance web
                            and mobile applications that can address{" "}
                            <b> complex business and technical issues</b>. We
                            set up cloud architectures that can scale to several
                            hundred thousand users.
                        </P1>
                    </Grid>

                    <Grid item lg={4} xs={12}>
                        <P1 id="home-expertise-content2">
                            We advise you on your business strategy based on our
                            experience and a<b> 360-degree view of </b> the
                            technical challenges: UX, acquisition, SEO, SEA,
                            choice of service providers and technical tools.
                        </P1>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        <ActionButton
                            id="home-expertise-button"
                            variant="contained"
                            color="secondary"
                        >
                            Discuss Project
                        </ActionButton>
                    </Grid>
                </Grid>
            </Container>
        </HomeExpertiseWrap>
    );
};

const animate = () => 
{
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#home-expertise",
            start: "top center",
        },
    })
        .fromTo(
            "#home-expertise-title",
            {
                opacity: 0,
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
            }
        )

        .fromTo(
            "#home-expertise-content1",
            {
                opacity: 0,
                x: 20,
            },
            {
                opacity: 1,
                x: 0,
            }
        )

        .fromTo(
            "#home-expertise-content2",
            {
                opacity: 0,
                x: -20,
            },
            {
                opacity: 1,
                x: 0,
            }
        )

        .fromTo(
            "#home-expertise-button",
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

export default HomeExpertise;
