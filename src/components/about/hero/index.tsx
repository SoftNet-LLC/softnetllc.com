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
                            <H1>About Software on Network</H1>
                            <P2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae urna sit amet enim
                                fermentum efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia curae; Etiam ac lorem arcu. Phasellus ultrices justo at ipsum varius
                                sodales.
                            </P2>
                            <ActionButton
                                variant="outlined"
                                color="secondary"
                                className="light"
                                size="large"
                                id="home-hero-btn1">
                                Start With Us
                            </ActionButton>
                        </div>
                    </Grid>
                    <Grid lg={4}>
                        <div className="video-wrap">
                            <video
                                src="https://media.istockphoto.com/id/484583630/video/financial-data-and-charts-dolly-in-loopable-white-black.mp4?s=mp4-640x640-is&k=20&c=F3Ct5oBlyZfdo7qps1tEhZDyWrie8c6atHQifgZWNeQ="
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
