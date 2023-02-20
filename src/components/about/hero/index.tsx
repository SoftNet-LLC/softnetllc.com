import React, { FC } from "react";
import AboutHeroWrap from "./style/wrap";
import Grid from "@mui/material/Unstable_Grid2";
import { H1, H2 } from "@components/shared/heading";
import { P1, P2 } from "@components/shared/paragraph";
import { ActionButton } from "@components/shared/button";
import { Container } from "@mui/material";

const AboutHero: FC = () => {
    return (
        <AboutHeroWrap>
            <Container>
                <Grid
                    alignItems="center"
                    spacing={8}
                    container>
                    <Grid lg={8}>
                        <div className="hero-wrap">
                            <H1>We build software.</H1>
                            <P2>
                                A team of talented developers who are dedicated to brining your project to life.
                            </P2>
                            <ActionButton
                                variant="outlined"
                                color="secondary"
                                className="light"
                                size="large"
                                id="home-hero-btn1">
                                Talk with us
                            </ActionButton>
                        </div>
                    </Grid>
                    <Grid lg={4}>
                        <div className="video-wrap">
                            <video
                                src="/temp/data-encrypting.mp4"
                                muted
                                loop
                                autoPlay/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AboutHeroWrap>
    );
};

export default AboutHero;
