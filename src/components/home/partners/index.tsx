import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { Container, Stack } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { HomePartnersWrap } from './styles';

const HomePartners: FC = () => {
    useEffect(() => {
        animate();
    }, []);

    return (
        <HomePartnersWrap id="home-partners">
            <Container>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-around"
                >
                    {data.map((brand: any, key) => (
                        <Image
                            key={key}
                            src={brand.image}
                            alt={brand.alt}
                            width="135"
                            height="50"
                            priority={true}
                            className="home-partners-item"
                        />
                    ))}
                </Stack>
            </Container>
        </HomePartnersWrap>
    );
};

const data = [
    {
        alt: 'Amazon',
        image: '/images/amazon.png',
    },
    {
        alt: 'Shopify',
        image: '/images/shopify.png',
    },
    {
        alt: 'Naipo',
        image: '/images/naipo.png',
    },
    {
        alt: 'Taobao',
        image: '/images/taobao.png',
    },
    {
        alt: 'Clarins',
        image: '/images/clarins.png',
    },
    {
        alt: 'Bisman Online',
        image: '/images/bisman.png',
    },
];

const animate = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: '#home-partners',
            start: 'bottom bottom',
        },
    }).fromTo(
        '.home-partners-item',
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
