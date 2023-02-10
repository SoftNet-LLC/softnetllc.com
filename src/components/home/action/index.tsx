import { FC } from "react";
import Image from "next/image";
import { Container, Stack } from "@mui/system";
import { H1, H2 } from "../../shared/heading";
import { ActionButton } from "../../shared/button";
import HomeActionWrap from "./style/wrap";
import { ILLUS1 } from "@assets/images";
import Grid from "@mui/material/Unstable_Grid2";


const HomeAction: FC = () => {
    return (
        <HomeActionWrap>
            <Container>
                <Grid
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={3}
                    container>
                    <Grid>
                        <div>
                            <Image
                                src={ILLUS1}
                                alt=""/>
                        </div>
                    </Grid>
                    <Grid>
                        <Stack
                            spacing={3}
                            justifyContent="center"
                            alignItems="center"
                            sx={{ textAlign: "center" }}>
                            <H2>have a project?</H2>
                            <ActionButton
                                color="secondary"
                                variant="contained">
                                Start conversation
                            </ActionButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </HomeActionWrap>
    );
};

export default HomeAction;
