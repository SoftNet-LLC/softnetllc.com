import React, { FC } from "react";
import { Card, Container, Grid, Stack } from "@mui/material";
import { AuthLayoutContent, AuthLayoutWrap } from "./styles";
import Image from "next/image";
import { H4 } from "components/shared/heading";
import { LogoLink } from "layouts/landing/component/footer/styles";
import Link from "next/link";


interface Props {
    children?: any;
}

const AuthLayout: FC<Props> = (props) =>
{
    const { children } = props;

    return (
        <AuthLayoutWrap>
            <Container
                style={{ height: "100%" }}
            >
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                    style={{ height: "100%" }}
                >
                    <Grid
                        item
                        xs={5}
                    >
                        <Stack
                            direction="row"
                            alignItems="flex-start"
                            spacing={2}
                            style={{
                                marginBottom: 16
                            }}
                        >
                            <Link href="/">
                                <LogoLink>
                                    <Image
                                        src="/images/logo.png"
                                        width="51"
                                        height="38"
                                        alt=""
                                        priority={true}
                                    />
                                </LogoLink>
                            </Link>

                            <H4>
                                Sign in as Manager.
                            </H4>
                        </Stack>

                        <Card>
                            <AuthLayoutContent>
                                {children}
                            </AuthLayoutContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={7}
                    >
                        <Image
                            src="/images/startup-launch.svg"
                            alt="Login"
                            width="800px"
                            height="500"
                            priority={true}
                        />
                    </Grid>
                </Grid>
            </Container>
        </AuthLayoutWrap>
    )
}

export default AuthLayout
