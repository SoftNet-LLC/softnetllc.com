import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonBase, Container, Stack } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { H2 } from "components/shared/heading";
import { P1 } from "components/shared/paragraph";
import { ActionButton } from "components/shared/button";
import { HomeProjectWrap, ImageWrap } from "./styles";

const HomeProjects: FC = () => 
{
    useEffect(() => 
    {
        animate();
    }, []);

    return (
        <HomeProjectWrap id="home-project">
            <Container>
                <Stack spacing={5}>
                    <Stack spacing={1}>
                        <H2 id="home-project-title">
                            Make it Real with Softnet.
                        </H2>
                        <P1 id="home-project-subtitle">
                            Get some Inspirations from 1800+ skills
                        </P1>
                    </Stack>

                    <ImageWrap>
                        {data.map((item, index) => (
                            <ButtonBase
                                key={index}
                                id={`home-project-item${index}`}
                            >
                                <Link href={item.link}>
                                    <a
                                        target="_blank"
                                        style={{
                                            marginBottom: -4,
                                        }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt="Softnet Project"
                                            width="800"
                                            height="438"
                                            priority={true}
                                        />
                                    </a>
                                </Link>
                            </ButtonBase>
                        ))}
                    </ImageWrap>

                    <Stack justifyContent="center" alignItems="center">
                        <ActionButton
                            id={"home-project-button"}
                            variant="outlined"
                            color="secondary"
                        >
                            More Projects
                        </ActionButton>
                    </Stack>
                </Stack>
            </Container>
        </HomeProjectWrap>
    );
};

const data = [
    {
        key: "Bao Society",
        image: "/images/project1.png",
        link: "https://baosociety.com/",
    },
    {
        key: "Metagolden",
        image: "/images/project2.png",
        link: "https://metagolden.io/",
    },
    {
        key: "Pop In The City",
        image: "/images/project3.png",
        link: "https://popinthecity.nyc/",
    },
    {
        key: "Camille Mormal",
        image: "/images/project4.png",
        link: "https://camillemormal.com/",
    },
    {
        key: "Forner",
        image: "/images/project5.png",
        link: "https://forner.studio/",
    },
    {
        key: "GOALS",
        image: "/images/project6.png",
        link: "https://goals.co/",
    },
    {
        key: "Camille Mormal",
        image: "/images/project4.png",
        link: "https://camillemormal.com/",
    },
    {
        key: "Forner",
        image: "/images/project5.png",
        link: "https://forner.studio/",
    },
    {
        key: "Bao Society",
        image: "/images/project1.png",
        link: "https://baosociety.com/",
    },
    {
        key: "Metagolden",
        image: "/images/project2.png",
        link: "https://metagolden.io/",
    },
    {
        key: "GOALS",
        image: "/images/project6.png",
        link: "https://goals.co/",
    },
    {
        key: "Pop In The City",
        image: "/images/project3.png",
        link: "https://popinthecity.nyc/",
    },
];

const animate = () => 
{
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

    data.map((d, i) => 
    {
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
