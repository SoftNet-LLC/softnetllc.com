import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ButtonBase, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import HomeProjectWrap from "./style/wrap";
import { H2 } from "@components/shared/heading";
import { P1 } from "@components/shared/paragraph";
import { ActionButton } from "@components/shared/button";


const HomeProjects: FC = () => {
    useEffect(() => {
        animate();
    }, []);

    return (
        <HomeProjectWrap id="home-project">
            <Container>
                <Grid
                    spacing={5}
                    container>
                    <Grid xs={12}>
                        <H2 id="home-project-title">
                            Make it with <mark>Softnet.llc</mark>
                        </H2>
                        <P1 id="home-project-subtitle">
                            Get some Inspirations from 1800+ skills
                        </P1>
                    </Grid>

                    <Grid
                        spacing={2}
                        container>
                        {projects.map((item, index) => (
                            <Grid
                                lg={4}
                                md={6}
                                xs={12}
                                key={index}>
                                <ButtonBase
                                    id={`home-project-item${index}`}>
                                    <Link
                                        style={{ marginBottom: -4 }}
                                        href={item.link}
                                        target="_blank">
                                        <Image
                                            src={item.image}
                                            alt="Softnet Project"
                                            width="800"
                                            height="438"
                                            priority={true}/>
                                    </Link>
                                </ButtonBase>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid
                        sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <ActionButton
                            href="/projects"
                            id={"home-project-button"}
                            variant="outlined"
                            color="secondary">
                            More Projects
                        </ActionButton>
                    </Grid>
                </Grid>
            </Container>
        </HomeProjectWrap>
    );
};

const projects = [
    {
        key: "Bao Society",
        image: "/temp/project1.png",
        link: "https://baosociety.com/",
    },
    {
        key: "Metagolden",
        image: "/temp/project2.png",
        link: "https://metagolden.io/",
    },
    {
        key: "Pop In The City",
        image: "/temp/project3.png",
        link: "https://popinthecity.nyc/",
    },
    {
        key: "Camille Mormal",
        image: "/temp/project4.png",
        link: "https://camillemormal.com/",
    },
    {
        key: "Forner",
        image: "/temp/project5.png",
        link: "https://forner.studio/",
    },
    {
        key: "GOALS",
        image: "/temp/project6.png",
        link: "https://goals.co/",
    },
    {
        key: "Camille Mormal",
        image: "/temp/project4.png",
        link: "https://camillemormal.com/",
    },
    {
        key: "Forner",
        image: "/temp/project5.png",
        link: "https://forner.studio/",
    },
    {
        key: "Bao Society",
        image: "/temp/project1.png",
        link: "https://baosociety.com/",
    },
    {
        key: "Metagolden",
        image: "/temp/project2.png",
        link: "https://metagolden.io/",
    },
    {
        key: "GOALS",
        image: "/temp/project6.png",
        link: "https://goals.co/",
    },
    {
        key: "Pop In The City",
        image: "/temp/project3.png",
        link: "https://popinthecity.nyc/",
    },
];

const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home-project",
            start: "top center",
        },
    });
    tl.fromTo(
        "#home-project-title",
        {
            opacity: 0,
            x: -50,
        },
        {
            opacity: 1,
            x: 0,
        }
    ).fromTo(
        "#home-project-subtitle",
        {
            opacity: 0,
            x: 20,
        },
        {
            opacity: 1,
            x: 0,
        }
    );

    projects.map((d, i) => {
        tl.fromTo(
            `#home-project-item${i}`,
            {
                opacity: 0,
                scale: 1.4,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.1
            }
        );
    });

    tl.fromTo(
        "#home-project-button",
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

export default HomeProjects;
