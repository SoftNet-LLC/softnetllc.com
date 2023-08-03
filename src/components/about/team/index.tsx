import React, { FC } from "react";
import AboutTeamWrap from "./style/wrap";
import { H2 } from "@components/shared/heading";
import { P1, P2 } from "@components/shared/paragraph";
import Grid from "@mui/material/Unstable_Grid2";
import { ActionButton } from "@components/shared/button";
import { Container } from "@mui/material";
import Np from "@assets/images/member/np.jpg"
import Image from "next/image";

const AboutTeam: FC = () => {
    return (
        <AboutTeamWrap>
            <Container>
                <Grid
                    spacing={6}
                    justifyContent="center"
                    container>
                    <Grid
                        lg={8}
                        xs={12}>
                        <H2 color="light">Who we are?</H2>
                        <P2 color="light">
                            The team at Softnet Technology is comprised of some of the best developers around the globe.<br/>
                            Each developer is tested for talent & abilty across a number of skillsets including:<br/> technical ability,
                            attention to detail, team spirit, and customer service.<br/><br/>
                            <mark>You dream it. We build it.</mark>
                        </P2>
                    </Grid>
                    <Grid>
                        <Grid
                            spacing={6}
                            justifyContent="center"
                            container>
                            {
                                members.map((i, index) => (
                                    <Grid key={index}>
                                        <div className="member-card">
                                            <Image
                                                style={{ objectFit: "cover" }}
                                                width={100}
                                                height={100}
                                                src={i.photo}
                                                alt={i.name}/>
                                            <div className="name-area">
                                                <p>{i.name}</p>
                                                <p className="job">{i.job}</p>
                                            </div>
                                        </div>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid>
                        <ActionButton
                            variant="contained"
                            color="secondary"
                            size="large"
                            id="home-hero-btn1"
                            fullWidth>
                            Join Us
                        </ActionButton>
                    </Grid>
                </Grid>
            </Container>
        </AboutTeamWrap>
    );
};


const members = [
    {
        name: "Nicholi Peck",
        job: "CEO, Founder",
        website: "https://nicholijin.com/",
        photo: Np
    },
    {
        name: "Liam Pole",
        job: "CEO",
        website: "https://nicholijin.com/",
        photo: "https://thumbs.dreamstime.com/b/face-portrait-very-happy-man-against-aqua-marine-blue-face-portrait-very-happy-man-against-aqua-marine-blue-color-background-204349508.jpg"
    },
    {
        name: "Nicholi Jin",
        job: "CTO, Founder",
        website: "https://nicholijin.com/",
        photo: "https://nicholijin.com/_next/static/media/me.c96f8d0c.jpg"
    },
    {
        name: "Zhang Zhun",
        job: "Developer",
        website: "https://nicholijin.com/",
        photo: "https://i.pinimg.com/564x/53/d9/a8/53d9a8d9ed9d72bdf7b8acf03225b7ad.jpg"
    },

]

export default AboutTeam;
