import { FC, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Container } from "@mui/material";
import useBreakpoints from "@utils/hooks/breakpoints.hooks";
import HomeAboutWrap from "./style/wrap";
import { HOME_ABOUT1, HOME_ABOUT2, HOME_ABOUT3, HOME_ABOUT4 } from "@assets/images";

const HomeAbout: FC = () => {
    const breakpoints = useBreakpoints();

    useEffect(() => {
        animate(breakpoints);
    }, []);

    return (
        <Container>
            <HomeAboutWrap id="home-about">
                <div>
                    <Image
                        src={HOME_ABOUT1}
                        alt="Softnet Developers"
                        width={600}
                        height={400}
                        placeholder="blur"
                        id="home-about-pc1"/>

                    <Image
                        src={HOME_ABOUT2}
                        alt="Softnet Developers"
                        width={600}
                        height={400}
                        placeholder="blur"
                        id="home-about-pc2"/>

                    {
                        (breakpoints === "web" || breakpoints === "tab") && (
                            <Image
                                src={HOME_ABOUT3}
                                alt="Softnet Developers"
                                width={600}
                                height={400}
                                placeholder="blur"
                                id="home-about-pc3"/>
                        )
                    }

                    {
                        breakpoints === "web" && (
                            <Image
                                src={HOME_ABOUT4}
                                alt="Softnet Developers"
                                width={600}
                                height={400}
                                placeholder="blur"
                                id="home-about-pc4"/>
                        )
                    }
                </div>

                <div
                    className="letter-placeholder"
                    id="home-about-title">
                    Softnet.llc
                </div>
            </HomeAboutWrap>
        </Container>
    );
};

const animate = (breakpoints: string) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home-about",
            start: "top center",
        },
    })

    tl.fromTo(
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

    tl.fromTo(
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

    if (breakpoints === "web" || breakpoints === "tab")  {
        tl.fromTo(
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
    }

    if(breakpoints === "web") {
        tl.fromTo(
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
    }

    tl.fromTo(
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
