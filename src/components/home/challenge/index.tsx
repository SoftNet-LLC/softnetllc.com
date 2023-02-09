import React, { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import { H2 } from "@components/shared/heading";
import { P1 } from "@components/shared/paragraph";
import HomeChallengeWrap from "./style/wrap";

const HomeChallenge: FC = () => {

    useEffect(() => {
        animate();
    }, []);

    return (
        <HomeChallengeWrap id='home-challenge'>
            <Container>
                <Grid
                    container
                    spacing={4}
                    direction="row"
                    justifyContent="center">
                    <Grid
                        lg={12}
                        xs={12}>
                        <H2 id='home-challenge-title'>
                            Passionate <mark>tech challenges</mark>
                        </H2>
                    </Grid>

                    <Grid
                        lg={4}
                        md={5}
                        sm={6}
                        xs={12}>
                        <P1 id='home-challenge-content1'>
                            We strive for <b> excellence </b> for all our
                            customers. To achieve this, we proceed in the most
                            pragmatic way possible in complete transparency with
                            you and your teams throughout the development
                            process.
                        </P1>
                    </Grid>

                    <Grid
                        lg={4}
                        md={5}
                        sm={6}
                        xs={12}>
                        <P1 id='home-challenge-content2'>
                            We are used to working on projects with{" "}
                            <b> high technical </b> and
                            <b> commercial stakes</b>. Whether for{" "}
                            <b> start-ups </b> or <b> large groups</b>, we know
                            how to adapt our methods and are ready to meet any
                            challenge.
                        </P1>
                    </Grid>
                </Grid>
            </Container>
        </HomeChallengeWrap>
    );
};

const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#home-challenge",
            start: "top center",
        },
    })
        .fromTo(
            "#home-challenge-title",
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
            "#home-challenge-content1",
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
            "#home-challenge-content2",
            {
                opacity: 0,
                x: -20,
            },
            {
                opacity: 1,
                x: 0,
            }
        )
};

export default HomeChallenge;
