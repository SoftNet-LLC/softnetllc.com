import React, { FC } from "react";
import AboutTeamWrap from "./style/wrap";
import { Container } from "@mui/system";
import { H2 } from "@components/shared/heading";
import { P1, P2 } from "@components/shared/paragraph";
import Grid from "@mui/material/Unstable_Grid2";
import { ActionButton } from "@components/shared/button";

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
                        <H2>Who we are?</H2>
                        <P2>
                            We are aware that the quality of our service depends first and foremost on the quality of our
                            recruitment. Each developer has gone through a rigorous selection process that values technical
                            potential, team spirit and a taste for customer service.
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
                                            <img src={i.photo} alt={i.name}/>
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
        photo: "https://media.istockphoto.com/id/1197071216/photo/portrait-of-a-smart-and-handsome-it-specialist-wearing-glasses-smiles-behind-him-personal.jpg?s=612x612&w=0&k=20&c=Dy8TjvDmeXWhR6gAZ_OuqLu3ytUJmtycEYdVQenpWoI="
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
        photo: "https://media.licdn.com/dms/image/C5603AQEZFyIy7f4zeA/profile-displayphoto-shrink_800_800/0/1650987155046?e=2147483647&v=beta&t=RUDQynswyzSrpkyuu38XqGduOGXMsjmV8ucP1xq2EtM"
    },
    {
        name: "Poul Smith",
        job: "Frontend D",
        website: "https://nicholijin.com/",
        photo: "https://i.pinimg.com/564x/53/d9/a8/53d9a8d9ed9d72bdf7b8acf03225b7ad.jpg"
    },
    {
        name: "Klark Laue",
        job: "Backend D",
        website: "https://nicholijin.com/",
        photo: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name: "Temuis Lisao",
        job: "UI Designer",
        website: "https://nicholijin.com/",
        photo: "https://www.techrepublic.com/wp-content/uploads/2021/03/ehu-pgoldman-square-385.jpg"
    },
    {
        name: "Woriq Diwoa M",
        job: "Netsuite D",
        website: "https://nicholijin.com/",
        photo: "https://devblogs.microsoft.com/cse/wp-content/uploads/sites/55/2022/06/preethi-square.jpg"
    },
    {
        name: "Catalyte Worgre",
        job: "Sales Manager",
        website: "https://nicholijin.com/",
        photo: "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk1NDE0NDMxMDA0MzY5OTQz/gettyimages-1244259778.jpg"
    },  {
        name: "Catalyte Worgre",
        job: "Sales Manager",
        website: "https://nicholijin.com/",
        photo: "https://www.catalyte.io/wp-content/uploads/2022/05/Nicole-developer.jpg"
    },
    {
        name: "Catalyte Worgre",
        job: "Sales Manager",
        website: "https://nicholijin.com/",
        photo: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    {
        name: "Catalyte Worgre",
        job: "Sales Manager",
        website: "https://nicholijin.com/",
        photo: "https://media.licdn.com/dms/image/C5603AQFm64VMmidf_Q/profile-displayphoto-shrink_800_800/0/1642434484137?e=2147483647&v=beta&t=6zGVY6he6Ivf6Yq6prAyiCRkX8OBodFyC2Nc7i8cQtQ"
    }
]

export default AboutTeam;
