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
                    spacing={3}
                    direction="row"
                    justifyContent="center">
                    <Grid
                        lg={12}
                        xs={12}>
                        <H2 id='home-challenge-title'>
                            We've got <mark>your back</mark>
                        </H2>
                    </Grid>

                    <Grid
                        lg={8}
                        md={10}
                        sm={6}
                        xs={12}>
                        <P1 id='home-challenge-content1'>
                            We stand behind all of our work. <br/><mark>Support</mark> is always just one message, or phone call away!                             
                            
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
};

export default HomeChallenge;
