import React, { FC, useEffect } from "react";
import Link from "next/link";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { H2 } from "@components/shared/heading";
import { P1 } from "@components/shared/paragraph";
import { ActionButton } from "@components/shared/button";
import HomeExpertiseWrap from "./style/wrap";
import BootstrapTooltip from "@components/shared/tooltip";



const HomeExpertise: FC = () => {

    useEffect(() => {
        animate();
    }, []);

    return (
        <HomeExpertiseWrap id="home-expertise">
            <Container>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center">
                    <Grid
                        lg={12}
                        xs={12}>
                        <H2 id="home-expertise-title">
                            Development is our passion.
                        </H2>
                    </Grid>

                    <Grid
                        lg={8}
                        md={10}
                        sm={12}
                        xs={12}>
                        <P1 id="home-expertise-content1">
                        We design, develop and maintain high-performance web and mobile applications.<br/>
                        From high-speed, SEO optimized websites to Python web scraping and custom data analysis tools, we do it all.
                        If you can dream it, <mark>we can build it.</mark> 
                            <br/> Please see a complete list of <Link href="/services">our services</Link>
                        </P1>
                    </Grid>
                    <Grid
                        xs={12}
                        sx={{
                            textAlign: "center",
                        }}>
                        <ActionButton
                            href="/conversation"
                            id="home-expertise-button"
                            variant="contained"
                            color="secondary">
                            Discuss a Project
                        </ActionButton>
                    </Grid>
                </Grid>
            </Container>
        </HomeExpertiseWrap>
    );
};

const animate = () => {
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
