import React, { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"
import { H2 } from "@components/shared/heading";
import { P1 } from "@components/shared/paragraph";
import HomeChallengeWrap from "./style/wrap";
import { ActionButton } from "@components/shared/button";
import { useRouter } from "next/router";
import DottedMap from "dotted-map";

const HomeChallenge: FC = () => {
    const router: any = useRouter();

    useEffect(() => {
        animate();
    }, []);

    const map = new DottedMap({
        width: 100,
        grid: "diagonal"
    });

    map.addPin({
        lat: 47.249343,
        lng: -122.5392254,
        svgOptions: { color: "#ff0000", radius: 0.4 }
    });

    map.addPin({
        lat: 43.249343,
        lng: -111.5392254,
        svgOptions: { color: "#ff0000", radius: 0.4 }
    });

    map.addPin({
        lat: 48.03891,
        lng: -106.14502,
        svgOptions: { color: "#ff0000", radius: 0.4 }
    });

    map.addPin({
        lat: 41.843707,
        lng: 123.402166,
        svgOptions: { color: "#ff0000", radius: 0.5 }
    });

    map.addPin({
        lat: 51.575492,
        lng: -0.286315,
        svgOptions: { color: "#ff0000", radius: 0.5 }
    });

    map.addPin({
        lat: 37.747140,
        lng: -122.437731,
        svgOptions: { color: "#ff0000", radius: 0.5 }
    });

    map.addPin({
        lat: 48.696234,
        lng: 2.328690,
        svgOptions: { color: "#ff0000", radius: 0.5 }
    });

    const svgMap = map.getSVG({
        radius: 0.22,
        color: "#796b65",
        shape: "circle",
        backgroundColor: "transparent",
    });

    return (
        <HomeChallengeWrap id='home-challenge'>
            <Container>
                <Grid
                    container
                    spacing={4}
                    direction="row"
                    justifyContent="center">
                    <Grid
                        lg={6}
                        xs={12}>
                        <img
                            width={614}
                            height={294}
                            style={{ width: 614, maxWidth: "100%" }}
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                            alt="Map image"/>
                    </Grid>

                    <Grid
                        lg={6}
                        md={10}
                        sm={6}
                        xs={12}>
                        <H2 id='home-challenge-title'>
                            We've got <mark style={{ fontWeight: 700 }}>your back</mark>
                        </H2>
                        <P1 id='home-challenge-content1'>
                            We stand behind all of our work. <br/><mark>Support</mark> is always just one message, or phone call away!                             
                        </P1>
                        <ActionButton
                            id="home-challenge-action"
                            onClick={()=>{router.push("/conversation")}}
                            variant="contained"
                            color="primary"
                            size="large">
                            Get started!
                        </ActionButton>
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
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
            }
        )
        .fromTo(
            "#home-challenge-action",
            {
                opacity: 0,
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
            }
        )
};

export default HomeChallenge;
