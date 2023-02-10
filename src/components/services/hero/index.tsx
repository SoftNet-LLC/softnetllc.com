import React, { FC } from "react";
import ServicesHeroWrap from "./style/wrap";
import { Button, Container } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Unstable_Grid2";
import { H1 } from "@components/shared/heading";
import { ActionButton } from "@components/shared/button";
import { TabType } from "@components/shared/tab/icon";

interface Props {
    tab: TabType
}

const ServicesHero: FC<Props> = (props) => {
    const { tab } = props

    return (
        <ServicesHeroWrap style={{ backgroundColor: tab.color }}>
            {
                !tab.color && (
                    <video
                        src="https://www.shutterstock.com/shutterstock/videos/1060927057/preview/stock-footage-digital-flight-through-info-graphics-stock-market-digital-graph-abstract-technology-ui-futuristic.webm"
                        muted
                        loop
                        autoPlay/>
                )
            }
            <Container>
                <Grid
                    alignItems="center"
                    justifyContent="space-around"
                    container>
                    <Grid lg={tab.image ? 5 : 10} xs={12}>
                        <H1>{tab.title}</H1>
                        <p>{tab.description}</p>
                        <ActionButton
                            variant="outlined"
                            color="info"
                            size="large"
                            className="light"
                            id="home-hero-btn2">
                            {tab.button}
                        </ActionButton>
                    </Grid>
                    {
                        tab.image && (
                            <Grid lg={4}>
                                <Image
                                    src={tab.image || ""}
                                    width="600"
                                    height="400"
                                    alt=""/>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </ServicesHeroWrap>
    );
};

export default ServicesHero;
