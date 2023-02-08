import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import React, { Fragment } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "@utils/theme";
import { ThemeProvider } from "@emotion/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </MuiThemeProvider>
    );
};

export default MyApp;
