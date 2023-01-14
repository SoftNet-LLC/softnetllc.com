import { FC, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { HomeAboutWrap } from "./styles";
import { Container } from "@mui/material";

const HomeAbout: FC = () => 
{
    useEffect(() => 
    {
        animate();
    }, []);

    return (
        <Container>
            <HomeAboutWrap id="home-about">
                <div>
                    <Image
                        src="/images/photo2.jpg"
                        alt="Softnet Developers"
                        width="1200"
                        height="800"
                        priority={true}
                        id="home-about-pc1"
                    />

                    <Image
                        src="/images/photo4.jpg"
                        alt="Softnet Developers"
                        width="1200"
                        height="800"
                        priority={true}
                        id="home-about-pc2"
                    />

                    <Image
                        src="/images/photo1.jpg"
                        alt="Softnet Developers"
                        width="1200"
                        height="800"
                        priority={true}
                        id="home-about-pc3"
                    />

                    <Image
                        src="/images/photo5.jpg"
                        alt="Softnet Developers"
                        width="1200"
                        height="800"
                        priority={true}
                        id="home-about-pc4"
                    />
                </div>

                <h1 id="home-about-title">Softnet.llc</h1>
            </HomeAboutWrap>
        </Container>
    );
};

const animate = () => 
{
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: "#home-about",
            start: "top center",
        },
    })
        .fromTo(
            "#home-about-pc1",
            {
                opacity: 0,
                scale: 1.3,
            },
            {
                opacity: 1,
                scale: 1,
            }
        )

        .fromTo(
            "#home-about-pc2",
            {
                opacity: 0,
                scale: 1.3,
            },
            {
                opacity: 1,
                scale: 1,
            }
        )

        .fromTo(
            "#home-about-pc3",
            {
                opacity: 0,
                scale: 1.3,
            },
            {
                opacity: 1,
                scale: 1,
            }
        )

        .fromTo(
            "#home-about-pc4",
            {
                opacity: 0,
                scale: 1.3,
            },
            {
                opacity: 1,
                scale: 1,
            }
        )

        .fromTo(
            "#home-about-title",
            {
                opacity: 0,
                rotateY: 90,
            },
            {
                opacity: 1,
                rotateY: 0,
            }
        );
};

export default HomeAbout;
