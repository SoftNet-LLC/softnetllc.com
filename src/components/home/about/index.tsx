import { FC } from "react";
import Image from "next/image";
import { Container } from "@mui/material";
import useBreakpoints from "@utils/hooks/breakpoints.hooks";
import HomeAboutWrap from "./style/wrap";
import { HOME_ABOUT1, HOME_ABOUT2, HOME_ABOUT3, HOME_ABOUT4 } from "@assets/images";

const HomeAbout: FC = () => {
    const breakpoints = useBreakpoints();

    return (
        <section>
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
        </section>
    );
};


export default HomeAbout;
