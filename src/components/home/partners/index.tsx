import React, { FC, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Container, Grid } from "@mui/material";
import HomePartnersWrap from "./style/wrap";
import { AMAZON, BISMAN, CLARINS, NAIPO, SHOPIFY, TAOBAO } from "@assets/images";

const HomePartners: FC = () => {

    useEffect(() => {
        animate();
    }, []);

    return (
        <HomePartnersWrap id="home-partners">
            <Container>
                <Grid
                    justifyContent="space-around"
                    spacing={4}
                    container>
                    {partners.map((brand: any, key) => (
                        <Grid item key={key}>
                            <Image
                                src={brand.image}
                                alt={brand.alt}
                                width="135"
                                height="47"
                                placeholder="blur"
                                className="home-partners-item"/>
                        </Grid>

                    ))}

                </Grid>
            </Container>
        </HomePartnersWrap>
    );
};

const partners = [
    {
        alt: "Amazon",
        image: AMAZON,
    },
    {
        alt: "Shopify",
        image: SHOPIFY,
    },
    {
        alt: "Naipo",
        image: NAIPO,
    },
    {
        alt: "Taobao",
        image: TAOBAO,
    },
    {
        alt: "Clarins",
        image: CLARINS,
    },
    {
        alt: "Bisman Online",
        image: BISMAN,
    },
];


const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#home-partners",
            start: "bottom bottom",
        },
    }).fromTo(
        ".home-partners-item",
        {
            opacity: 0,
            y: 50,
        },
        {
            opacity: 1,
            y: 0,
        }
    );
};

export default HomePartners;
