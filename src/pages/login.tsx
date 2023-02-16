import React from "react";
import { NextPage } from "next";
import AuthLayout from "@layouts/auth";
import { H1 } from "@components/shared/heading";
import { P2, P3 } from "@components/shared/paragraph";
import {
    Button,
    Checkbox, Divider,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    OutlinedInput,
    TextField
} from "@mui/material";
import Label from "@components/shared/input/label";
import { ActionButton } from "@components/shared/button";
import { FacebookOutlined, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { SeoProps } from "@utils/types/layout.type";

const pageSeo: SeoProps = {
    title: "Login - SoftNet.LLC",
    description: "Web & Mobile app development services in United State.",
    image: {
        url: "/softnetllc.png",
        width: 1448,
        height: 853
    },
    keywords: [
        "SoftNet",
        "LLC",
        "Web Development",
        "Website Development",
        "Mobile App Development",
        "Developers in US",
        "Agency in US",
        "United State Software",
        "Web Design",
        "App Development",
        "US web services"
    ],
    url: "https://softnetllc.com/login"
}


const LoginPage: NextPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <AuthLayout seo={pageSeo}>
            <div className="auth-card">
                <H1>Login</H1>

                <P2 style={{ marginBottom: 16 }}>
                    Sign into your management portal
                </P2>

                <Grid
                    alignItems="center"
                    spacing={2}
                    container>
                    <Grid xs={12}>
                        <div>
                            <Label
                                htmlFor="email">
                                Email
                            </Label>
                            <TextField
                                placeholder="Enter Email"
                                id="email"
                                name="email"
                                fullWidth/>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <FormControl
                            fullWidth
                            variant="outlined">
                            <Label
                                htmlFor="password">
                                Password
                            </Label>
                            <OutlinedInput
                                placeholder="Enter Password"
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment
                                        position="end">
                                        <IconButton
                                            aria-label="toggle password"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end">
                                            {
                                                showPassword ?
                                                    <VisibilityOff/> :
                                                    <Visibility/>
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                }/>
                        </FormControl>
                    </Grid>
                    <Grid xs={4}>
                        <P3>
                            <FormControlLabel
                                control={<Checkbox/>}
                                label="Keep login"/>
                        </P3>
                    </Grid>
                    <Grid
                        xs={8}>
                        <P3 style={{ textAlign: "right" }}>
                            Don't you have account?&nbsp;
                            <Link href="/register">
                                Register
                            </Link>
                        </P3>
                    </Grid>
                    <Grid xs={12}>
                        <ActionButton
                            color="secondary"
                            variant="contained"
                            fullWidth
                            size="large">
                            Login
                        </ActionButton>
                    </Grid>
                    <Grid xs={12}>
                        <Divider>
                            Or
                        </Divider>
                    </Grid>
                    <Grid xs={6}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            size="large">
                            <Google/>
                            Google
                        </Button>
                    </Grid>
                    <Grid xs={6}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            fullWidth
                            size="large">
                            <FacebookOutlined/>
                            Facebook
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
